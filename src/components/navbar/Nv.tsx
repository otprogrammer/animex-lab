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
import {Navbar as Nv, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link as Lnk, Button} from "@nextui-org/react";

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
    <div className="relative  max-w-[800px]  right-5 top-14  rounded-md ">
      <div  className="p-5 fixed right-2 bg-neutral-900/95 top-20 min-w-[280px] border-b-[1px] z-50  border-[#2b2a2a]">
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

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Genres",
    "Popular",
    "Browse",
    "Contact",
    "Support",
    "Discord",
  
  ];

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
    <Nv
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-neutral-800/80 text-white"
      
      
    >
      <NavbarContent  className="sm:flex" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          
          <Button variant="faded" className="font-bold px-6 ">ANIMEX</Button>
        </NavbarBrand>
        
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Search />
          
        </NavbarItem>
        <NavbarItem>
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
                  <div className="bg-neutral-900 text-white flex flex-col gap-2 py-3 absolute w-[258px] right-5 z-50 rounded-md drop-shadow-2xl">

                    
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
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="hidden sm:flex max-w-[400px] bg-neutral-800/80 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="text-neutral-400 hover:text-white" key={`${item}-${index}`}>

            {item  == "Discord" ? 
            <a href="https://discord.gg/uEAKwRrFpn" target="_blank">
            <span>Discord</span>
          </a>
           : item == "Support" ? 
           <a href="https://ko-fi.com/ottoprogrammer" target="_blank">
                    <span>Support</span>
                  </a>
             :
            
            <Lnk
              className="w-full text-neutral-400 hover:text-white"
              
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Lnk>
            }
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nv>
    

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
