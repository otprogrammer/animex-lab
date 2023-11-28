/* eslint-disable @next/next/next-script-for-ga */
// "use client";
import "./globals.css";
import type { Metadata } from "next";
import Theme from "@/components/theme/Theme";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "@/components/search/Search";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import { useState } from "react";
import Layout from "@/components/head/Head";
import Contact from "@/components/contact/Contact";
import { useContact } from "../../store/store";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar/Navbar";

// export const metadata: Metadata = {
//   title: "Animex",
//   description:
//     "Animex - Watch Anime for free in HD quality with English subbed or dubbed. You can watch anime online free in HD. Best place for free find and one-click anime. English Subbed and Dubbed anime online. WATCH NOW!",
//   keywords:
//     "Animex, animex , animexstream, anime, anime live, free anime, anime stream, anime hd, english sub, kissanime, gogoanime, animeultima, 9anime, 123animes, animefreak, vidstreaming, gogo-stream",
//   icons: "/logo",
// };


export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  



  // const [isDropDown, setIsDropDown] = useState(false);
  // const { enableIsContact } = useContact();

  return (
    <html data-theme={"black"} lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3357173685448212"
     crossOrigin="anonymous"></script>
      </head>
      {/* <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.GOOGLE_TAGS});
  `,
          }}
        />
      </head> */}

      

      <body className="min-h-screen">
      
        <Navbar />
        
        <NextTopLoader color="#e11d48" />
        {children}
        <Analytics />

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
        <Contact />
        <Footer />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
        />
      </body>
    </html>
  );
}
