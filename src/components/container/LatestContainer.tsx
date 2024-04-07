"use client";
import React, { useEffect, useState } from "react";
import { BsPlayFill, BsStarFill } from "react-icons/bs";
import TimeAgo from "../card/TimeAgo";
import moment from "moment";
import { Pagination } from "@nextui-org/react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { isMobile } from "@oplayer/core";



function timeAgo(dateString: string): string {
  return moment(dateString).fromNow();
}

export default function LatestContainer({data,heading}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [animesPerPage] = useState(20);
  const [show,setShow] = useState(true)

  // Assuming `data` is an array of anime objects
  useEffect(() => {
    
    // Fetch data if using an API or perform necessary data fetching actions
  }, []);

  const handlePageChange = (newPage) => {
    setShow(false)
    setCurrentPage(newPage);
    setTimeout(() => {

        setShow(true)
    },120)  

  };

  const slicedAnime = data.slice(
    (currentPage - 1) * animesPerPage,
    currentPage * animesPerPage
  );

  return (
    <div className="md:max-w-[90%] mx-auto">
      {/* Pagination controls */}
      <div className="flex justify-between items-center w-full py-2">

      <span className={`  flex text-white  font-semibold items-center gap-2  text-sm md:text-2xl`}>
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              {heading && heading}
            </span>

      <Pagination
      size={isMobile ? "sm" : "lg"}
        isCompact
        showShadow
        showControls
        total={Math.ceil(data.length / animesPerPage)}
        initialPage={currentPage}
        onChange={handlePageChange}
        className="w-fit flex justify-center"
        classNames={{
          wrapper: "divide-x-2 divide-black",
          prev: "!border-transparent",
          cursor: "bg-red-600 text-white font-bold",
        }}
      />
      </div>


      <Transition
              appear={true}
              as={"div"}
              show={show}
              enter="transform transition duration-500"
              enterFrom=" scale-[0.90]"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-500 transition ease"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo=" scale-95 "
            >

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5  gap-2 py-2">
        {slicedAnime.map((anime, idx) => (
          <Link
          key={idx}
          className=" w-full   inline-grid"
          href={{
  
            pathname : `/anime/${anime.id}`,
            query : {
              id :anime.id,
              ep : anime.episodeNumber,
            //   title : anime.title,
              anilistid : anime.anilistid
            }
          
          }}

        //   as={`/anime/${anime.id}`}
        >
            <div
              className={`group card rounded-lg  relative h-[125px] md:h-[165px] overflow-hidden cursor-pointer `}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={` hidden opacity-0 bg-white/50 z-50  group-hover:flex group-hover:opacity-90 items-center justify-center   hover:text-red-600 rounded-full shadow  w-12 h-12`}
                >
                  <BsPlayFill size={30} />
                </div>
              </div>
              <img
                className=" object-cover overflow-hidden h-[125px] md:h-[165px] group-hover:scale-110 group-hover:opacity-70  shadow-xl transition-all duration-300 ease-in-out rounded-sm"
                src={anime.image}
                alt={anime.title}
              />

              {anime?.score && (
                <small
                  style={{
                    // backgroundImage:
                    //   "url(https://cdn.myanimelist.net/images/image_box_shadow_bottom.png?v=1634263200)",
                    backgroundSize: "100% 100%",
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    textShadow: "0 1px 2px #000, 0 1px 2px #000",
                    fontSize: ".75rem",
                  }}
                  className="text-neutral-100 flex gap-1 items-center bg-neutral-800/80 rounded-xl py-1 px-3 z-50 whitespace-nowrap text-ellipsis overflow-hidden  text-start hover:before:scale-105"
                >
                  <BsStarFill className="text-[#f7bf63]" />
                  {anime?.score}{" "}
                </small>
              )}

              <small
                style={{
                  // backgroundImage:
                  //   "url(https://cdn.myanimelist.net/images/image_box_shadow_bottom.png?v=1634263200)",
                  backgroundSize: "100% 100%",
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  textShadow: "0 1px 2px #000, 0 1px 2px #000",
                  fontSize: ".75rem",
                }}
                className="text-neutral-100 bg-neutral-800/80 rounded-xl py-1 px-3 z-50 whitespace-nowrap text-ellipsis overflow-hidden  text-start hover:before:scale-105"
              >
                {timeAgo(anime?.updated_at)}{" "}
              </small>
              <small
                style={{
                  // backgroundImage:
                  //   "url(https://cdn.myanimelist.net/images/image_box_shadow_bottom.png?v=1634263200)",
                  backgroundSize: "100% 100%",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  textShadow: "0 1px 2px #000, 0 1px 2px #000",
                  fontSize: ".75rem",
                }}
                className="text-neutral-100 p-2 z-50 whitespace-nowrap text-ellipsis overflow-hidden  text-start hover:before:scale-105"
              >
                Episode {anime.episodeNumber}
              </small>
              {/* <span className="absolute top-1 left-2 bg-black/70 px-2 py-0 rounded-sm">
                  <span
                    className="text-white font-semibold"
                    style={{ textShadow: "rgb(0, 0, 0) 1px 1px 5px" }}
                  >
                    {anime.episode}
                  </span>
                </span> */}
            </div>
            <small className="p-1 truncate">{anime.title}</small>
          </Link>
        ))}
      </div>
                </Transition>
    </div>
  );
}
