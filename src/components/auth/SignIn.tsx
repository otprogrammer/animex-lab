/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import supabase from "../../../utils/supabase";
// import WaveButton from '../btn/WaveButton';
import { motion } from "framer-motion";
import {
  Button,
  Input,
  Link,
  Modal,
  ModalContent,
  Spinner,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { TbEyeFilled } from "react-icons/tb";
import { Dialog } from "@headlessui/react";
import { TRANSITION_EASINGS } from "@nextui-org/framer-transitions";
import { toast } from "react-toastify";

interface SignInProps {
  handleClick: any;
  createNewAccount: any;
  isOpen: boolean;
}

export default function SignIn(props: SignInProps) {
  // const supabase = useSupabaseClient()
  const [isVisible, setIsVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [selected, setSelected] = React.useState<string | number>("login");

  const signUp = async () => {
    setLoading(true);
    try {
      await supabase.auth
        .signUp({
          email: email as any,
          password: password as any,
          options: {
            data: {
              full_name: "Animex Fan",
              username: username,
              avatar_url: "https://i.imgur.com/cv36w6Yg.jpg",
              coverimage: "https://i.imgur.com/R4XpmcS.jpeg",
            },
          },
        })
        .then((e) => {
          console.log(e);

          setLoading(false);
          if (e.error?.status !== 400) {
            props.handleClick();
          }
        });
    } catch (e: any) {
      console.log(e.message);
      toast.error(e.message, { theme: "dark" });
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      await supabase.auth
        .signInWithPassword({
          email: email as any,
          password: password as any,
        })
        .then((e) => {
          console.log(e);

          setLoading(false);
          if (e.error?.status !== 400) {
            props.handleClick();
          }
        });
      await supabase.auth.refreshSession();
    } catch (e: any) {
      console.log(e.message);
      toast.error(e.message, { theme: "dark" });
      setLoading(false);
    }
  };
  return (
    <Modal
      backdrop="blur"
      isOpen={props.isOpen}
      className="w-full max-w-fit h-fit z-50 p-0"
      onOpenChange={props.handleClick}
      motionProps={{
        variants: {
          enter: {
            scale: 1,
            y: "var(--slide-enter)",
            opacity: 1,
            transition: {
              scale: {
                duration: 0.4,
                ease: TRANSITION_EASINGS.ease,
              },
              opacity: {
                duration: 0.4,
                ease: TRANSITION_EASINGS.ease,
              },
              y: {
                type: "spring",
                bounce: 0,
                duration: 0.6,
              },
            },
          },
          exit: {
            scale: 1.1, // NextUI default 1.03
            y: "var(--slide-exit)",
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: TRANSITION_EASINGS.ease,
            },
          },
        },
      }}
      placement="center"
      size="full"
    >
      <ModalContent  className="w-full p-0 relative">
        <div className="flex  w-full">
          <img
            className="hidden lg:block lg:w-[350px] lg:h-[507px] object-cover"
            src="https://e1.pxfuel.com/desktop-wallpaper/213/433/desktop-wallpaper-jujutsu-kaisen-phone-jujutsu-kaisen-mobile.jpg"
          />

          <div
            className="w-[300px] md:w-[420px] p-4 h-auto flex flex-col  items-center bg-[#0e0f10] drop-shadow-2xl rounded-lg text-gray-200 "
            onClick={(e) => e.stopPropagation()}
          >
            {/* <div className="p-6 flex flex-col gap-2 items-center">
              <img
                src={`/logo/logo.png`}
                className="h-20 w-20 rounded-full object-cover"
                alt="image"
              />
              <h1 className="text-2xl">Sign In</h1>
            </div> */}
            <Tabs
              fullWidth
              className="w-full"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
              variant="light"
            >
              <Tab className="w-full" key="login" title="Login">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                  className="flex flex-col gap-4 mt-4"
                >
                  <Input
                    type="email"
                    label="Email"
                    className="max-w-full"
                    variant="underlined"
                    onChange={(e: any) => setEmail(e.target.value)}
                    isRequired
                    required
                  />

                  <Input
                    label="Password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    variant="underlined"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <BsFillEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <TbEyeFilled className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-full"
                  />
                  <p className="text-center text-small">
                    Need to create an account?{" "}
                    <Link
                      className="cursor-pointer"
                      color="danger"
                      size="sm"
                      onPress={() => setSelected("sign-up")}
                    >
                      Sign up
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    {loading ? (
                      <Button fullWidth variant="faded">
                        {" "}
                        Logging in <Spinner size="sm" color="danger" />
                      </Button>
                    ) : (
                      <Button type="submit" fullWidth variant="faded">
                        Login
                      </Button>
                    )}
                  </div>
                </form>
              </Tab>
              <Tab className="w-full" key="sign-up" title="Sign up">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signUp();
                  }}
                  className="flex flex-col gap-4 h-[300px] mt-4"
                >
                  <Input
                    type="text"
                    label="Username"
                    className="max-w-full"
                    variant="underlined"
                    onChange={(e: any) => setUsername(e.target.value)}
                    isRequired
                  />
                  <Input
                    type="email"
                    label="Email"
                    className="max-w-full"
                    variant="underlined"
                    onChange={(e: any) => setEmail(e.target.value)}
                    isRequired
                  />

                  <Input
                    label="Password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    variant="underlined"
                    isRequired
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <BsFillEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <TbEyeFilled className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-full"
                  />
                  <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link
                      className="cursor-pointer"
                      color="danger"
                      size="sm"
                      onPress={() => setSelected("login")}
                    >
                      Login
                    </Link>
                  </p>
                  <div className="flex gap-2 justify-end">
                    {loading ? (
                      <Button fullWidth variant="faded">
                        {" "}
                        Signing up <Spinner size="sm" color="danger" />
                      </Button>
                    ) : (
                      <Button variant="faded" type="submit" fullWidth>
                        Sign up
                      </Button>
                    )}
                  </div>
                </form>
              </Tab>
            </Tabs>
            {/* <div className="flex flex-col gap-4 w-full ">
              <div className="px-6 space-y-3"></div>

              <div className="flex flex-col gap-3 text-sm px-6">
                <button
                  className="bg-red-600 hover:bg-red-800 w-full p-2.5"
                  onClick={signIn}
                >
                  Sign In
                </button>
                <button className="bg-[#111] hover:bg-red-400/10 w-full p-2.5 text-red-500 border-[1px] border-neutral-700">
                  CAN'T SIGN IN ?
                </button>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center bg-black/80 w-full py-7 px-6 border-y-[1px] border-neutral-700">
                <h1>New to Animex?</h1>
                <button
                  onClick={props.createNewAccount}
                  className="bg-[#111] hover:bg-red-400/10 w-full p-2.5 text-red-500 border-[1px] text-sm border-neutral-700"
                >
                  CREATE AN ACCOUNT
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
