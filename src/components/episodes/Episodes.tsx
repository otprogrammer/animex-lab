/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { type AnimeEpisodesProps, EpisodesProps } from "../../../types/types";
import EpisodesPagination from "./EpisodesPagination";
import { useEpisodesImage, useSort } from "../../../store/store";
import { Transition } from "@headlessui/react";
import { Button, Pagination } from "@nextui-org/react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoPlayCircle } from "react-icons/io5";
import { BsPlayFill } from "react-icons/bs";

export default function Episodes({
  episodesList,
  animeImg,
  handleEpisodeRoute,
  episodeNumber,
  isModal,
  showEpisodes,
}: EpisodesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { isEpImgEnabled, enableEpImg, disableEpImg } = useEpisodesImage();
  const { isSort } = useSort();

  function handlePageChange(pageNumber: any) {
    setCurrentPage(pageNumber);
  }

  const episodesPerPage = 20;
  const startIndex = (currentPage - 1) * episodesPerPage;
  const endIndex = startIndex + episodesPerPage;
  const episodesToRender =
    Array.isArray(episodesList) && !isSort
      ? episodesList
          .sort((a, b): any => a.number - b.number)
          .slice(startIndex, endIndex) || []
      : Array.isArray(episodesList) && isSort
      ? episodesList
          .sort((a, b): any => b.number - a.number)
          .slice(startIndex, endIndex) || []
      : [];

  useEffect(() => {
    setTotalPages(Math.ceil(episodesList?.length / 20));
    setCurrentPage(getPageNumber());
  }, [episodesList]);

  function getPageNumber() {
    const episodesPerPage = 20; // Assuming 10 episodes per page
    const pageNumber = Math.ceil(episodeNumber / episodesPerPage);
    if (
      pageNumber <= 0 ||
      pageNumber > Math.ceil(episodesList?.length / episodesPerPage)
    ) {
      return -1; // Invalid episode number
    }
    return pageNumber;
  }

  return (
    <Transition
      appear={true}
      as={"div"}
      show={true}
      enter="transform transition duration-[500ms]"
      enterFrom="opacity-0 scale-[0.90]"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      {episodesList?.length > 20 && (
        <div className="w-full px-2 py-1">
          {/* <EpisodesPagination
              totalPages={totalPages}
              currentPage={currentPage}
              episodesList={episodesList}
              episodesPerPage={episodesPerPage}
              handlePageChange={handlePageChange}
            /> */}

          <Pagination
            isCompact
            showShadow
            showControls
            total={totalPages}
            initialPage={currentPage}
            onChange={handlePageChange}
            className="w-full flex justify-center"
            classNames={{
              wrapper: "divide-x-2 divide-black",
              prev: "!border-transparent",
              cursor: "bg-red-600 text-white font-bold",
            }}
          />
        </div>
      )}

      <div
        className={`grid  gap-y-1 p-2 mb-2 ${
          isModal
            ? "max-h-[340px] overflow-y-scroll md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5 gap-1"
           
            : isEpImgEnabled == "true"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1"
            : "grid "
        }`}
      >
        {episodesToRender?.map((ep: AnimeEpisodesProps, i: number) => (
          <div
            onClick={() => handleEpisodeRoute(ep.id, ep.number)}
            key={i}
            className="group flex flex-col max-w-full cursor-pointer relative "
          >
            {isEpImgEnabled == "true" ? (
              <div className="my-1">
                <div className={"overflow-hidden relative"}>
                  <img
                    className={`flex-shrink-0 w-full hover:scale-110 transition-all group-hover:opacity-60 shadow-xl overflow-hidden ${
                      isModal ? "h-[130px]" : " h-[140px]"
                    } rounded-lg   object-cover`}
                    src={ep.image || animeImg}
                    alt={ep.title}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`${episodeNumber == ep.number ? "flex opacity-1 bg-red-600/70" : "hidden opacity-0 bg-white bg-opacity-40"} group-hover:flex items-center justify-center   hover:bg-red-600 rounded-full shadow group-hover:opacity-90 w-12 h-12`}>
                      <BsPlayFill className={`${episodeNumber == ep.number && 'animate-pulse'}`} size={30} />
                    </div>
                  </div>
                </div>
                <small className="bg-black/60 font-black py-0.5 px-2.5 absolute top-1 left-0 rounded-br-lg">
                  {ep.number}
                </small>
                <small
                  className={` font-lighter p-0.5 text-default-500 ${
                    episodeNumber == ep.number && "text-red-500 font-bold"
                  }`}
                >
                  {ep.title || "Episode " + ep.number}
                </small>
              </div>
            ) : (
              <Button
                onClick={() => handleEpisodeRoute(ep.id, ep.number)}
                className={`flex group ${
                  episodeNumber == ep.number ? "bg-black" : "bg-black/20"
                }  hover:bg-black py-2 transition-all duration-300 justify-start rounded-sm `}
              >
                <FaCirclePlay
                  className={`animate-appearance-in ${
                    episodeNumber == ep.number ? "flex text-red-500" : "hidden"
                  } group-hover:flex transition-all duration-250`}
                />
                <small className="   rounded-br-lg flex-shrink-0 self-center">
                  Episode{" "}
                  <span className="txt-primary ml-0.5 font-semibold">
                    {" "}
                    {ep.number}
                  </span>{" "}
                </small>

                <small
                  className={` font-lighter ${
                    episodeNumber == ep.number
                      ? "text-red-600"
                      : "text-zinc-400"
                  }  truncate`}
                >
                  {ep.title}
                </small>
              </Button>
            )}
          </div>
        ))}
      </div>
    </Transition>
  );
}
