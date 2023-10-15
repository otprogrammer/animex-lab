"use client";
import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import Link from "next/link";
import { useContact } from "../../../store/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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

export default function Navbar() {
  const [isDropDown, setIsDropDown] = useState(false);
  const { enableIsContact } = useContact();
  const router = useRouter();
  const resumeId =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("resumeId"));

  console.log(resumeId);

  useEffect(() => {
    if (resumeId)
      if (resumeId) toast.info(<Msg resumeId={resumeId} />, { theme: "dark" });
  }, []);

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
        <div className="navbar-end">
          <Search />
          {/* <Theme /> */}
        </div>
      </div>
    </>
  );
}
