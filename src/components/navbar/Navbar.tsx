"use client";
import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import Link from "next/link";
import { useContact, useSearchModal, useUser } from "../../../store/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaSearch, FaUserAlt, FaUserCircle } from "react-icons/fa";
import Backdrop from "../backdrop/Backdrop";
import SignIn from "../auth/SignIn";
import OutsideClickHandler from "../browse/OutsideClickHandler";
import SignUp from "../auth/SignUp";
import { useAuth } from "../hooks/Auth";
import supabase from "../../../utils/supabase";
import { CgLogOff, CgSearch } from "react-icons/cg";
import {
  Navbar as Nv,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link as Lnk,
  Button,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownTrigger,
  Dropdown,
} from "@nextui-org/react";

import { AnimatePresence, motion } from "framer-motion";

const Msg = ({ resumeId }: Record<string, any>) => {
  return (
    <div className="flex ">
      <div className="flex flex-col">
        <span className="text-neutral-400">You were watching</span>
        <span className={" font-bold text-sm text-gray-200"}>
          {`${resumeId?.title} Episode ${resumeId?.episode}`}
        </span>
      </div>
    </div>
  );
};

interface LoginMenuProps {
  setShowLogin: any;
  setShowRegister: any;
}
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import UserDropdown from "./UserDropdown";
import SearchModal from "../modal/SearchModal";

const LoginMenu = (props: LoginMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  return (
    <AnimatePresence>
      {props.setShowLogin && (
        <motion.div
          initial={{ y: -40 }}
          animate={{ y: -7 }}
          exit={{ y: -50 }}
          className="absolute z-50 max-w-[300px]  right-1 top-3  rounded-md "
        >
          <>
            <div className="p-5 fixed right-2 bg-neutral-900/95 top-20 min-w-[280px] border-b-[1px] z-50  border-[#2b2a2a]">
              <div className="p-3 flex flex-col gap-2 items-center">
                <img
                  src={`https://i.imgur.com/cv36w6Yg.jpg`}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <h1 className="text-2xl text-white">Guest</h1>
              </div>
              <hr />
              <div className="py-3 grid gap-2">
                <button
                  onClick={props.setShowLogin}
                  className="py-2 px-4 bg-red-500  text-white  font-semibold flex  items-center drop-shadow-2xl justify-center gap-2  hover:bg-red-700 hover:text-gray-200 rounded-md transition-all ease-in-out"
                >
                  <span className="mx-auto">Sign in</span>
                </button>
                <button
                  onClick={props.setShowRegister}
                  className="py-2 px-4 bg-neutral-700  text-white  font-semibold flex  items-center drop-shadow-2xl justify-center gap-2  hover:bg-neutral-800 hover:text-gray-200 rounded-md transition-all ease-in-out"
                >
                  <span className="mx-auto">Register</span>
                </button>
              </div>
            </div>

            {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
          </>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const menuItems = [
  "Genres",
  "Popular",
  "Browse",
  "Contact",
  "Support",
  "Discord",
];
export default function Navbar() {
  const [isDropDown, setIsDropDown] = useState(false);
  const { enableIsContact } = useContact();
  const [showOptions, setShowOptions] = useState<any>(false);
  const [showRegister, setShowRegister] = useState<any>(false);
  const [show, setShow] = useState<any>(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [session, setSession] = useState<any>();
  const [scrollBackground, setScrollBackground] = useState("bg-transparent");
  const router = useRouter();
  const [showSupport, setShowSupport] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState<any>(false);
  const [showLogin, setShowLogin] = useState<any>(false);
  const resumeId =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("resumeId"));
  const { user } = useAuth();
  const { getUserData, userData } = useUser();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { openModal } = useSearchModal();

  useEffect(() => {
    if (resumeId)
      if (resumeId) toast.info(<Msg resumeId={resumeId} />, { theme: "dark" });
    if (user) {
      getUserData(user?.id);
    }
  }, []);
  console.log(userData);

  const SignOut = async () => {
    await supabase.auth.signOut();

    await supabase.auth.refreshSession();
    router.push("/");
  };

  return (
    <>
      <Nv
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          wrapper: "px-1 lg:px-4 justify-between gap-0",
        }}
        className="bg-black/80 text-white  "
      >
        <NavbarContent className="sm:flex" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="" justify="center">
          <NavbarBrand>
            <Button
              onClick={() => router.push("/")}
              variant="faded"
              className="font-bold px-6 bg-neutral-900/90 text-white border-neutral-600/70"
            >
              ANIMEX
            </Button>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-2">
          <NavbarItem
            onClick={openModal}
            className="cursor-pointer p-2.5 bg-neutral-900 hover:bg-neutral-800 rounded-lg"
          >
            <FaSearch size={14} />
          </NavbarItem>
          {/* <NavbarItem className="">
            <Search />
          </NavbarItem> */}

          <NavbarItem className="">
            {user ? (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="md"
                    src={user?.user_metadata?.avatar_url}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="text-default-500">{user?.email}</p>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() =>
                      router.push(`/profile/${user?.user_metadata?.username}`)
                    }
                    key="profile"
                  >
                    My Profile
                  </DropdownItem>

                  {/* <DropdownItem key="settings">Settings</DropdownItem> */}
                  <DropdownItem key="discord">
                    <a href="https://discord.gg/uEAKwRrFpn" target="_blank">
                      <span>Discord</span>
                    </a>
                  </DropdownItem>

                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem onClick={SignOut} key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <div className=" gap-3 items-center">
                <div
                  className="  rounded-full cursor-pointer"
                  onClick={() => setShowLoginMenu(true)}
                >
                  <FaUserCircle color="white" size={30} />
                </div>
              </div>
            )}
          </NavbarItem>
        </NavbarContent>

        <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
          <NavbarMenu className="hidden sm:flex max-w-[300px] bg-neutral-900/80 ">
            <NavbarMenuItem className="text-neutral-400 hover:text-white">
              <Link href={`/`}>Home</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="text-neutral-400 hover:text-white">
              <Link href={`/browse`}>Browse</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="text-neutral-400 hover:text-white">
              <Link href={`/popular`}>Popular</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="text-neutral-400 hover:text-white">
              <Link href={`/genres`}>Genres</Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="text-neutral-400 hover:text-white">
              <a href="https://discord.gg/uEAKwRrFpn" target="_blank">
                <span>Discord</span>
              </a>
            </NavbarMenuItem>
            <NavbarMenuItem className="text-neutral-400 hover:text-white">
              <a href="https://ko-fi.com/ottoprogrammer" target="_blank">
                <span>Support</span>
              </a>{" "}
            </NavbarMenuItem>
            <NavbarMenuItem className="text-neutral-400 hover:text-white">
              <span onClick={enableIsContact}>Contact</span>{" "}
            </NavbarMenuItem>
          </NavbarMenu>
        </OutsideClickHandler>
      </Nv>

      <div id="loginmenu">
        <OutsideClickHandler onOutsideClick={() => setShowLoginMenu(false)}>
          <AnimatePresence>
            {showLoginMenu && (
              <motion.div
                initial={{ y: -40 }}
                animate={{ y: -7 }}
                exit={{ x: 350 }}
                className="fixed z-50 max-w-[300px]  right-1 top-1.5  rounded-md "
              >
                <>
                  <div className=" p-5 fixed right-2 bg-black/50 top-20 min-w-[280px] border-b-[1px] z-50  border-[#2b2a2a]">
                    <div className="p-3 flex flex-col gap-2 items-center">
                      <img
                        src={`https://i.imgur.com/cv36w6Yg.jpg`}
                        className="h-20 w-20 rounded-full object-cover"
                      />
                      <h1 className="text-2xl text-white">Guest</h1>
                    </div>
                    <hr />
                    <div className="py-3 grid gap-2">
                      <button
                        onClick={() => setShowLogin(true)}
                        className="py-2 px-4 bg-red-500  text-white  font-semibold flex  items-center drop-shadow-2xl justify-center gap-2  hover:bg-red-700 hover:text-gray-200 rounded-md transition-all ease-in-out"
                      >
                        <span className="mx-auto">Sign in</span>
                      </button>
                      <button
                        onClick={() => setShowRegister(true)}
                        className="py-2 px-4 bg-neutral-700  text-white  font-semibold flex  items-center drop-shadow-2xl justify-center gap-2  hover:bg-neutral-800 hover:text-gray-200 rounded-md transition-all ease-in-out"
                      >
                        <span className="mx-auto">Register</span>
                      </button>
                    </div>
                  </div>

                  {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
                </>
              </motion.div>
            )}
          </AnimatePresence>
        </OutsideClickHandler>
      </div>

      <AnimatePresence>
        {showLogin && (
          <Backdrop onClick={() => setShowLogin(false)}>
            <SignIn
              handleClick={() => {
                setShowLogin(false);
              }}
              createNewAccount={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            />
          </Backdrop>
        )}
      </AnimatePresence>

      <SearchModal />
      <AnimatePresence>
        {showRegister && (
          <Backdrop onClick={() => setShowRegister(false)}>
            <SignUp
              handleClick={() => setShowRegister(false)}
              logIn={() => {
                setShowRegister(false);
                setShowLogin(true);
              }}
            />
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
}
