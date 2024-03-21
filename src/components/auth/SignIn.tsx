/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import supabase from "../../../utils/supabase";
// import WaveButton from '../btn/WaveButton';
import {motion} from 'framer-motion'
interface SignInProps {
  handleClick: any;
  createNewAccount: any;
}
export default function SignIn(props: SignInProps) {
  // const supabase = useSupabaseClient()

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const signIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email as any,
        password: password as any,
      });
      await supabase.auth.refreshSession();

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
    exit={{}}
      className="w-[420px] h-auto flex flex-col justify-center items-center bg-[#0e0f10] drop-shadow-2xl rounded-lg text-gray-200 "
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6 flex flex-col gap-2 items-center">
        <img
          src={`/logo/logo.png`}
          className="h-20 w-20 rounded-full object-cover"
          alt="image"
        />
        <h1 className="text-2xl">Sign In</h1>
      </div>
      <div className="flex flex-col gap-4 w-full ">
        <div className="px-6 space-y-3">
          <div className="group">
            <input
              className="p-2 bg-neutral-800 w-full focus:outline-none placeholder:text-sm placeholder:px-1  "
              id="email"
              type="text"
              placeholder="Email Address"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <div className="relative flex items-center justify-center invisible before:border-red-500 after:border-red-500 before:top-0 before:right-0  before:w-4 before:border-b-2 before:border-r before:transition-all before:duration-700 before:ease-in-out  after:top-0 after:left-0  after:w-4 after:border-t-2 after:transition-all after:duration-700 after:ease-in-out group-focus-within:before:w-full group-focus-within:visible   focus-within:after:w-[calc(100%+16px)]"></div>
          </div>

          <div className="group" tabIndex={0}>
            {/* <label htmlFor="password">Password</label> */}

            <input
              className=" p-2 bg-neutral-800 w-full focus:outline-none placeholder:text-sm placeholder:px-1"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <div className="relative flex items-center justify-center invisible before:border-red-500 after:border-red-500 before:top-0 before:right-0  before:w-4 before:border-b-2 before:border-r before:transition-all before:duration-700 before:ease-in-out  after:top-0 after:left-0  after:w-4 after:border-t-2 after:transition-all after:duration-700 after:ease-in-out group-focus-within:before:w-full group-focus-within:visible  focus-within:after:w-[calc(100%+16px)]"></div>
          </div>
        </div>

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
      </div>
    </motion.div>
  );
}
