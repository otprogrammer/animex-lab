"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AnimeInfo } from "../../../types/types";
import { Icon } from '@iconify/react';

function Card(anime: any) {

  return (
    <>
    
  {/* <span className="indicator-item p-1 rounded-full bg-neutral-700 hover:bg-neutral-800 cursor-pointer">
  <Icon icon="pepicons-pop:dots-y" />
</span>  */}
    <Link className=" w-full max-w-[2000px] inline-grid" href={`/anime/${anime.malId || anime.id}?ep=1`}>
      <div className={`card w-[200px] h-[270px] overflow-hidden`}>
        <img className=" object-cover  hover:scale-110 transition-all duration-300 ease-in-out rounded-sm" src={anime.image || anime.image_url} alt={anime?.title?.romaji}/>
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
                fontSize:".75rem"

              }}
              className="text-neutral-100 p-2 z-50 whitespace-nowrap text-ellipsis overflow-hidden  text-start hover:before:scale-105"
            >
              {anime.title.romaji}
            </small>
      </div>
    </Link>



    </>

  );
}

export default Card;
