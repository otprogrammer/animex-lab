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
        autoplay={{ delay: 5000 }}
        slidesPerView={2} // Display 4 slides at once
        spaceBetween={2} // Add space between slides
        coverflowEffect={{
          rotate: 10,
          depth: 90,
          slideShadows: true,
          stretch: 40,
          scale:1.09,

        }}

        
        modules={[Autoplay]}
        mousewheel={true}
        initialSlide={1}
        style={{ paddingBlock: "0rem" }}
        className="sws"
        onSlideChange={handleSlideChange}
      >
        {data?.[0]?.trending?.map((show: any, index: any) => (
          <SwiperSlide key={index}  className="homeswtab  max-h-[500px] ">
            <div className=" md:hidden relative rounded-2xl">
              <img
                src={`${`https://image.tmdb.org/t/p/original${show.poster_path}`}`}
                className={`w-full md:hidden h-full rounded-lg `}
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
                  <Link  className="bg-black hover:bg-red-600 z-50" href={`/anime/${show.anime_id}`}>
                    <Button className="flex items-center rounded-sm  text-white  shadow py-1 h-fit px-4  gap-4 ">
                      <FaPlay />
                      <span>Play</span>
                    </Button>
                  </Link>
                </div>
              ) : (
                ""
              )}

            <div className="relative hidden md:flex md:flex-row-reverse md:justify-between      ">
              {/* <button className="rounded-full text-white font-bold relative gap-2 ">
                        <svg
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z" />
                        </svg>
                      </button> */}
              <div className="flex flex-col justify-between gap-2 p-3">
                <div>

                <h1 className="rounded-full txt-primary font-bold relative gap-2 line-clamp-1">
                  {show?.title}
                </h1>
                <p className="opacity-75 px-1 z-50 lg:w-full mt-3  italic line-clamp-3 text-[10px] md:text-sm">
                  {show.synopsis}
                </p>
                </div>
                <Link  className=" mt-4 z-50 flex items-end justify-end" href={`/anime/${show.anime_id}`}>
                    <Button className="flex items-center rounded-sm shadow-2xl text-white bg-black/80 hover:bg-red-600 shadow-primary  py-1 px-4  gap-4 ">
                      <FaPlay />
                      <span>Play</span>
                    </Button>
                  </Link>
              </div>

              <img
                src={`${`https://image.tmdb.org/t/p/original${show.backdrop_path}`}`}
                className={` h-[180px] w-[140px] object-cover rounded-sm`}
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
