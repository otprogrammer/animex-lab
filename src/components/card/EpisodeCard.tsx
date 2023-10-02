"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AnimeInfo } from "../../../types/types";
import { Icon } from '@iconify/react';

function EpisodeCard(anime: any) {

  return (
    <>
    
    <div className="indicator">
  <span className="indicator-item p-1 rounded-full bg-neutral-700 hover:bg-neutral-800 cursor-pointer">
  <Icon icon="pepicons-pop:dots-y" />
</span> 
    <Link className=" w-full max-w-[200px]" href={`/anime/${anime.id}?id=${anime.id}&ep=${anime.episodeNumber}`}>
      <div className={`  `}>
        <img className="object-cover w-[200px] h-[270px] rounded-sm" src={anime.image} />
      {/* <small className="text-ellipsis text-zinc-400 ">{anime.title.romaji}</small> */}
      </div>
    </Link>
</div>


    </>

  );
}

export default EpisodeCard;
