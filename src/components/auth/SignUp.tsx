import React, { useState } from "react";
import supabase from "../../../utils/supabase";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router'
// import {motion} from "framer-motion"
// import { supabase } from '@/supabase';
import {motion} from 'framer-motion'

interface SignUpProps {
  handleClick: any;
  logIn: any;
}
export default function SignUp(props: SignUpProps) {
  // const supabase = useSupabaseClient()
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const signUp = async () => {
    try {
      const { user, session, error }: any = await supabase.auth.signUp({
        email: email as any,
        password: password as any,
        options: {
          data: {
            full_name: "John",
            username: username,
            avatar_url: "https://i.imgur.com/cv36w6Yg.jpg",
            coverimage: "https://i.imgur.com/R4XpmcS.jpeg",
          },
        },
      });
      router.push(`/profile/${username}`);
      props.handleClick();

      if (error) throw error;
    } catch (e: any) {
      console.log(e.message);
    }
  };
  return (
    <motion.div 
    initial={{y:-240}}
    animate={{y:0}}
    exit={{ }}
      className="w-[420px] h-auto flex flex-col justify-center items-center bg-[#0e0f10] drop-shadow-2xl rounded-sm text-gray-200 "
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6 flex flex-col gap-2 items-center">
        <img src={`/logo/logo.png`} className="h-16 w-16 rounded-full object-cover" />
        <h1 className="text-2xl">Create Account</h1>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="px-6 space-y-4">
          <div className="group">
            {/* <label htmlFor="username">Username</label> */}
            <input
              className="p-2 bg-neutral-800 w-full focus:outline-none placeholder:text-sm placeholder:px-1 "
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e: any) => setUsername(e.target.value)}
            />
            <div className="relative flex items-center justify-center invisible before:border-red-500 after:border-red-500 before:top-0 before:right-0  before:w-4 before:border-b-2 before:border-r before:transition-all before:duration-700 before:ease-in-out  after:top-0 after:left-0  after:w-4 after:border-t-2 after:transition-all after:duration-700 after:ease-in-out group-focus-within:before:w-full group-focus-within:visible   focus-within:after:w-[calc(100%+16px)]"></div>
          </div>
          {/* <label htmlFor="email">Email</label> */}
          <div className="group">
            <input
              className="p-2 bg-neutral-800 w-full focus:outline-none placeholder:text-sm placeholder:px-1"
              id="email"
              type="text"
              placeholder="Email Address"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <div className="relative flex items-center justify-center invisible before:border-red-500 after:border-red-500 before:top-0 before:right-0  before:w-4 before:border-b-2 before:border-r before:transition-all before:duration-700 before:ease-in-out  after:top-0 after:left-0  after:w-4 after:border-t-2 after:transition-all after:duration-700 after:ease-in-out group-focus-within:before:w-full group-focus-within:visible   focus-within:after:w-[calc(100%+16px)]"></div>
          </div>

          <div className="group">
            {/* <label htmlFor="password">Password</label> */}
            <input
              className="p-2 bg-neutral-800 w-full focus:outline-none placeholder:text-sm placeholder:px-1"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <div className="relative flex items-center justify-center invisible before:border-red-500 after:border-red-500 before:top-0 before:right-0  before:w-4 before:border-b-2 before:border-r before:transition-all before:duration-700 before:ease-in-out  after:top-0 after:left-0  after:w-4 after:border-t-2 after:transition-all after:duration-700 after:ease-in-out group-focus-within:before:w-full group-focus-within:visible   focus-within:after:w-[calc(100%+16px)]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm px-6">
          <button
            className="bg-red-600  hover:bg-red-800 w-full p-2.5 drop-shadow-2xl"
            onClick={signUp}
          >
            CREATE ACCOUNT
          </button>
          <button
            onClick={props.handleClick}
            className="bg-[#111] w-full p-2.5 text-red-500 border-[1px] border-neutral-700 hover:bg-red-400/5"
          >
            CANCEL
          </button>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center bg-black/80 w-full py-7 px-6 border-y-[1px] border-neutral-700">
          <h1>Already a member?</h1>
          <button
            onClick={props.logIn}
            className="g-[#111] w-full p-2.5 text-red-500 border-[1px] border-neutral-700 hover:bg-red-400/10 text-sm"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </motion.div>
  );
}
