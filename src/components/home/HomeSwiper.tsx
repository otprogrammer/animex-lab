"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import useSWR from "swr";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
// @ts-ignore

import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import Link from "next/link";
import supabase from "../../../utils/supabase";
import { FaPlay } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { AD } from "../details/Overview";
import { isMobile } from "@oplayer/core";
SwiperCore.use([EffectCoverflow, Pagination]);

const headers = {
  authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
};

const fetcher = (url: string) =>
  fetch(url, { headers: headers }).then((res) => res.json());

export default function HomeSwiper() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [top, setTop] = useState<any>([]);
  const { data, error, isLoading } = useSWR(
    "https://tomeleyakujcqfaovrqr.supabase.co/rest/v1/trending?select=*&id=eq.13",
    fetcher
  );

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <div className="max-w-[80%] mx-auto overflow-hidden w-full ">
      <div className="">
        <div className="flex p-4 items-center flex-row-reverse w-full lg:w-11/12 justify-between mx-auto">
          <div className="flex items-center justify-center gap-4">
            {/* <ThemeButton />
            <SearchBar /> */}
          </div>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        speed={900}
        centeredSlides={true}
        autoplay={{ delay: 50000 }}
        slidesPerView={isMobile ? 2 : 1} // Display 4 slides at once
        spaceBetween={2} // Add space between slides
        coverflowEffect={{
          rotate: 0,
          depth: 0,
          slideShadows: true,
          stretch: 0,
          scale: 1,
        }}
        modules={[Autoplay]}
        mousewheel={true}
        initialSlide={1}
        style={{ paddingBlock: "0rem" }}
        className="sws"
        onSlideChange={handleSlideChange}
      >
        {data?.[0]?.trending?.map((show: any, index: any) => (
          <SwiperSlide  key={index} className=" z-50 relative max-h-[400px] ">
            <div style={{
            background: `url(https://image.tmdb.org/t/p/original${show.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            zoom:"80%",
            opacity: "0.2",
          }} className="absolute inset-0 hidden md:block">

            </div>
            <div className=" md:hidden relative rounded-2xl">
              <img
                src={`${`https://image.tmdb.org/t/p/original${show.poster_path}`}`}
                className={`w-[200px] md:hidden object-cover h-full rounded-lg `}
                alt=""
              />
              {/* <div
                className={`absolute inset-0  duration-400  ${
                  activeSlide === index
                    ? " shadow-neutral-900 shadow-2xl rounded-lg"
                    : "bg-background opacity-70"
                }`}
              ></div> */}
            </div>
            {activeSlide === index ? (
              <div
                className="flex md:hidden gap-2 
               justify-center
              items-center my-2 "
              >
                <Link
                  className="bg-black hover:bg-red-600 z-50"
                  href={`/anime/${show.anime_id}`}
                >
                  <Button className="flex items-center rounded-sm  text-white  shadow py-1 h-fit px-4  gap-4 ">
                    <FaPlay />
                    <span>Play</span>
                  </Button>
                </Link>
              </div>
            ) : (
              ""
            )}

            <div
              
              className="relative h-full hidden md:flex  md:flex-row-reverse md:justify-between      "
            >
              
              <div className="flex flex-col justify-between gap-2 p-3">
                <div>
                  <div className="flex justify-between items-center ">
                  {/* <img         className="h-10"        src={`${`https://image.tmdb.org/t/p/original${show.logo}`}`}
 /> */}
                  <h1 className="rounded-full text-2xl txt-primary font-bold relative gap-2 line-clamp-1">
                    {show?.title}
                    <span className="text-zinc-400"> ({show?.year})</span>
                  </h1>
                  <span className="text-warning">{show?.status}</span>
                    </div>
                    
                  <p className="relative px-1 z-50 lg:w-full mt-3 indent-4 text-default-600 italic text-[10px] md:text-sm">
                    {show.synopsis}
                  </p>
                  {/* <div className="grid grid-cols-4">


                  <AD
              title={"Year"}
              data={show?.year}
            />
            <AD
              title={"Score"}
              data={show?.score}
            />
            <AD
              title={"Year"}
              data={show?.type}
            />
            <AD
              title={"Year"}
              data={show?.year}
            />
                  </div> */}
                </div>

                <div                   className=" mt-4 z-50 flex items-end justify-between"
>
                <div className="">

               {show?.genres?.map((s, i: number) => (
                <span className="text-white font-medium text-sm" key={i}>{s}{i !== show?.genres.length - 1 && ", "}</span>
              ))}
                </div>
            
                <Link
                  href={`/anime/${show.anime_id}`}
                >
                  <Button className="flex items-center rounded-sm shadow-2xl text-white bg-black/80 hover:bg-red-600 shadow-primary  py-1 px-4  gap-4 ">
                    <FaPlay />
                    <span>Play</span>
                  </Button>
                </Link>
                </div>
              </div>

              <img
                src={`${`https://image.tmdb.org/t/p/original${show.poster_path}`}`}
                className={` h-full w-[240px] object-cover rounded-sm`}
                alt=""
              />

              <div
                className={`   ${
                  activeSlide === index
                    ? "bg-gradient-to-t  shadow-neutral-900 shadow-2xl rounded-xl from-[rgb(44 44 44)] to-transparent"
                    : "bg-[rgb(44 44 44)] opacity-70"
                }`}
              ></div>

              {activeSlide === index ? (
                <div className="absolute flex-col w-full  gap-2  bottom-2 flex px-5 py-3">
                  {/* <div className="text-4xl px-1  flex  items-center gap-2 font-bold">
                    {show.title?.romaji || show.title}{" "}
                    <button>{show?.vote_average?.toFixed(1)}</button>
                  </div> */}
                  {/* <div className="opacity- px-1 z-50 lg:w-5/12  italic line-clamp-3 text-[10px] md:text-sm">
                    {show.synopsis}
                  </div> */}

                  <div className="flex gap-2 items-center z-40">
                    <Link
                      className="z-40 cursror-pointer text-white hover:txt-primary flex items-center justify-center"
                      href={`/anime/${show.anime_id}`}
                    >
                      {/* <h1 className="rounded-full  font-bold relative gap-2 ">
                        {show?.title}
                      </h1> */}
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
