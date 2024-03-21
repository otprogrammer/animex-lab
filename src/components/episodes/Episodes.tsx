/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { type AnimeEpisodesProps, EpisodesProps } from "../../../types/types";
import EpisodesPagination from "./EpisodesPagination";
import { useEpisodesImage, useSort } from "../../../store/store";
import { Transition } from "@headlessui/react";
import { Button } from "@nextui-org/react";

export default function Episodes({
  episodesList,
  animeImg,
  handleEpisodeRoute,
  episodeNumber,
  isModal,
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
      <div className="flex gap-2 items-center justify-between">
        <h1>Episodes:</h1>
        {episodesList?.length > 19 && (
          <div className="">
            <EpisodesPagination
              totalPages={totalPages}
              currentPage={currentPage}
              episodesList={episodesList}
              episodesPerPage={episodesPerPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </div>

      <div
        className={`grid  gap-y-1 p-2 mb-2 ${
          isModal
            ? "max-h-[340px] overflow-y-scroll md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-5 gap-1"
            : isEpImgEnabled == "true"
            ? "grid-cols-2 gap-1"
            : "grid "
        }`}
      >
        {episodesToRender?.map((ep: AnimeEpisodesProps, i: number) => (
          <div
            onClick={() => handleEpisodeRoute(ep.id, ep.number)}
            key={i}
            className="flex flex-col max-w-full cursor-pointer relative "
          >
            {isEpImgEnabled == "true" ? (
              <div className="my-1">
                <div className="overflow-hidden">
                <img
                  className={`flex-shrink-0 w-full hover:scale-110 transition-all  overflow-hidden${
                    isModal ? "h-[130px]" : "h-[100px]"
                  } rounded-sm object-cover`}
                  src={ep.image || animeImg}
                  alt={ep.title}
                />
                  </div>
                <small className="bg-black/60 font-black py-0.5 px-2.5 absolute top-0 left-0 rounded-br-lg">
                  {ep.number}
                </small>
                <small className={` font-lighter p-0.5 ${episodeNumber == ep.number && "text-red-500"}`}>
                  {ep.title || "Episode " + ep.number}
                </small>
              </div>
            ) : (
              <Button onClick={() => handleEpisodeRoute(ep.id, ep.number)} className="flex  bg-black/20 hover:bg-black py-2 transition-all duration-300 justify-start rounded-sm ">
                <small className="   rounded-br-lg flex-shrink-0 self-center">
                  Episode <span className="txt-primary ml-0.5 font-semibold"> {ep.number}</span>{" "}
                </small>

                <small className=" font-lighter  text-zinc-400 truncate">
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
