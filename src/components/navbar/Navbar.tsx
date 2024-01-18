"use client";
import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import Link from "next/link";
import { useContact } from "../../../store/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import Backdrop from "../backdrop/Backdrop";
import SignIn from "../auth/SignIn";
import OutsideClickHandler from "../browse/OutsideClickHandler";
import SignUp from "../auth/SignUp";
import { useAuth } from "../hooks/Auth";
import supabase from "../../../utils/supabase";
import { CgLogOff } from "react-icons/cg";

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

const LoginMenu = (props: LoginMenuProps) => {
  return (
    <div className="relative  max-w-[800px]  right-5 top-14 z-50 rounded-md ">
      <div className="p-5 fixed right-2 bg-neutral-900/95 top-20 min-w-[280px] border-b-[1px] border-[#2b2a2a]">
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
    </div>
  );
};
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
    const {user} = useAuth();

  console.log(user);

  useEffect(() => {
    if (resumeId)
      if (resumeId) toast.info(<Msg resumeId={resumeId} />, { theme: "dark" });
  }, []);


  const SignOut = async () => {
    await supabase.auth.signOut();

    await supabase.auth.refreshSession();
    router.push("/");
  };

  return (
    <>
      <div className="navbar bg-neutral-900 mb-8">
        <div className="navbar-start">
          <div onClick={() => setIsDropDown((t) => !t)} className="dropdown  ">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle swap swap-rotate"
            >
              {/* this hidden checkbox controls the state */}

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>

            {/* <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label> */}

            {isDropDown && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content relative mt-3 z-50 p-2 shadow bg-neutral-900 rounded-lg w-52"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href={`/genres`}>Genres</Link>
                </li>
                <li>
                  <Link href={`/popular`}>Popular</Link>
                </li>
                <li>
                  <span onClick={enableIsContact}>Contact</span>
                </li>
                <li>
                  <a href="https://ko-fi.com/ottoprogrammer" target="_blank">
                    <span>Support</span>
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/uEAKwRrFpn" target="_blank">
                    <span>Discord</span>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-center">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl rounded-full"
          >
            ANIMEX
          </Link>
        </div>
        <div className="navbar-end gap-1.5">
          <Search />
          {user ? (
              <div id="profilemenu">
                
                <div onClick={() => setShowOptions(!showOptions)}>
                  <img
                    className="h-10 w-10 object-cover rounded-full"
                    src={user?.user_metadata?.avatar_url}
                  />
                  {/* <img className="h-10 w-10 object-cover " src={`https://tomeleyakujcqfaovrqr.supabase.co/storage/v1/object/public/avatars/${session.user.user_metadata.avatar_url}`} /> */}
                </div>
                
                {showOptions && (
                  <div className="bg-neutral-900 text-white flex flex-col gap-2 py-3 absolute w-[258px] right-5 rounded-md drop-shadow-2xl">

                    
                    <div className="py-2 px-3 flex border-b-2 gap-4 border-neutral-700">
                      <img
                        className="h-11 w-11 object-cover rounded-full"
                        src={user?.user_metadata?.avatar_url}
                      />

                      <div className="flex flex-col text-sm">
                        <span>{user?.user_metadata.username}</span>
                        <span className="text-gray-400">
                          {user?.email}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        onClick={() =>
                          router.push(
                            `/profile/${user?.user_metadata?.username}`
                          )
                        }
                        className="py-3 px-4 flex items-center gap-6 cursor-pointer hover:bg-black/50"
                      >
                        <FaUserAlt />
                        My Profile
                      </div>
                      <div
                        className="py-3 px-4 flex items-center gap-6 cursor-pointer hover:bg-black/50"
                        onClick={SignOut}
                      >
                        <CgLogOff size={20} strokeWidth={1.5} />
                        <span>Sign Out</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex gap-3 items-center">
                <div
                  className="  rounded-full cursor-pointer"
                  onClick={() => setShowLoginMenu(!showLoginMenu)}
                >
                  <FaUserCircle color="white" size={30} />
                </div>

                
              </div>
            )}
          {/* <Theme /> */}
        </div>
      </div>

      {showLoginMenu && (
        <div id="loginmenu">
          <OutsideClickHandler onOutsideClick={() => setShowLoginMenu(false)}>
            <LoginMenu
              setShowLogin={() => setShowLogin(true)}
              setShowRegister={() => setShowRegister(true)}
            />
          </OutsideClickHandler>
        </div>
      )}

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
    </>
  );
}
