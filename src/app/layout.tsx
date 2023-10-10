import "./globals.css";
import type { Metadata } from "next";
import Theme from "@/components/theme/Theme";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "@/components/search/Search";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Animex",
  description:
    "Animex - Watch Anime for free in HD quality with English subbed or dubbed. You can watch anime online free in HD. Best place for free find and one-click anime. English Subbed and Dubbed anime online. WATCH NOW!",
  keywords:
    "Animex, animex , animexstream, anime, anime live, free anime, anime stream, anime hd, english sub, kissanime, gogoanime, animeultima, 9anime, 123animes, animefreak, vidstreaming, gogo-stream",
  icons: "/logo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme={"black"} lang="en">
      <body className="min-h-screen">
        <div className="navbar bg-neutral-900 mb-8">
          <div className="navbar-start">
            <div className="dropdown  ">

            <label tabIndex={0}  className="btn btn-circle swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content relative mt-3 z-50 p-2 shadow bg-neutral-900 rounded-box w-52"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <Link href={`/animes`}>Animes</Link>
                </li>
                <li>
                  <Link href={`/popular`}>Popular</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a
              href="/"
              className="btn btn-ghost normal-case text-xl rounded-full"
            >
              ANIMEX
            </a>
          </div>
          <div className="navbar-end">
            <Search />
            {/* <Theme /> */}

            {/* <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> */}
          </div>
        </div>
        <NextTopLoader color="#e11d48" />

        {children}

        <ToastContainer
          position={"top-left"}
          // onClick={() =>
          //   router.push(`/watching/${resumeId.anime_id}/${resumeId.episode}`)
          // }

          autoClose={5000}
          transition={Flip}
          draggablePercent={30}
          theme="colored"
        />
        <Footer />
      </body>
    </html>
  );
}
