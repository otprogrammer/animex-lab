/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {type AnimeEpisodesProps, EpisodesProps } from "../../../types/types";
import EpisodesPagination from "./EpisodesPagination";
import { useEpisodesImage } from "../../../store/store";


export default function Episodes({
  episodesList,
  animeImg,
  handleEpisodeRoute,
}: EpisodesProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [isSort, setIsSort] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const {isEpImgEnabled,enableEpImg,disableEpImg}  = useEpisodesImage()


    const handleSort = () => {
        setIsSort(t => !t);
      };

      function handlePageChange(pageNumber: any) {
        setCurrentPage(pageNumber);
      }

    const episodesPerPage = 20;
  const startIndex = (currentPage - 1) * episodesPerPage;
  const endIndex = startIndex + episodesPerPage;
  const episodesToRender =
    Array.isArray(episodesList) && isSort
      ? episodesList.sort((a, b): any => a.number - b.number).slice(startIndex, endIndex) || []
      : Array.isArray(episodesList) && !isSort
      ? episodesList.sort((a, b): any => b.number - a.number).slice(startIndex, endIndex) || []
      : [];
      

      useEffect(() => {
        setTotalPages(Math.ceil(episodesList?.length / 20)  );

      },[])

  return (
    <div>

<div className="flex justify-between items-center">

      <h1>Episodes:</h1>
      <div>

      <EpisodesPagination totalPages={totalPages} currentPage={currentPage} episodesList={episodesList} episodesPerPage={episodesPerPage} handlePageChange={handlePageChange} />
      </div>
</div>
<div className={`grid p-1 ${isEpImgEnabled ? "grid-cols-2 gap-2" : "grid"}`}>


      {episodesToRender?.map((ep: AnimeEpisodesProps, i: number) => (
        <div
          onClick={() => handleEpisodeRoute(ep.id,ep.number)}
          key={i}
          className="flex flex-col max-w-full cursor-pointer relative my-1"
        >

          
            {isEpImgEnabled ? (
              
            <div>
          <img className="flex-shrink-0 w-full h-[100px] rounded-sm object-cover" src={ep.image || animeImg} alt={ep.title} />
            <small className="bg-neutral-900/80 font-black py-0.5 px-1.5 absolute top-0 left-0 rounded-br-lg">{ep.number}</small>
            <small className=" font-lighter p-0.5">{ep.title}</small>
          </div>
            ) : 
            (

          <div className="flex bg-neutral-900/80 hover:scale-105 hover:bg-neutral-800 py-2 transition-all duration-300 justify-between">
          <small className="  py-0.5 px-1.5 rounded-br-lg flex-shrink-0">Episode <span className="txt-primary"> {ep.number}</span> </small>

            <small className=" font-lighter p-0.5">{ep.title}</small>
            
          </div>
            )}
        </div>
      ))}
</div>
    </div>
  );
}
