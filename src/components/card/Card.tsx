"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimeInfo } from "../../../types/types";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useDetailsModal, useModal } from "../../../store/store";
import { BsStarFill } from "react-icons/bs";
import { CgTime } from "react-icons/cg";
import { RiTimeFill } from "react-icons/ri";

function formatTimestamp(timestamp: number): string {
  // Create a new Date object using the provided timestamp
  const date = new Date(timestamp);

  // Get hours and minutes
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine AM or PM suffix
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hour from 24-hour to 12-hour format
  const formattedHour = hours % 12 || 12; // Converts 0 hours to 12 for 12 AM

  // Format minutes to ensure two digits
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Combine parts to form the final time string
  return `${formattedHour}:${formattedMinutes} ${ampm}`;
}

function Card(anime: any) {
  const { enableIsModal } = useModal();
  const { openModal } = useDetailsModal();
  const router = useRouter();
  return (
    <>
      {/* <span className="indicator-item p-1 rounded-full bg-neutral-700 hover:bg-neutral-800 cursor-pointer">
  <Icon icon="pepicons-pop:dots-y" />
</span>  */}
      <div
        className=" w-full cursor-pointer max-w-[200px] hover:-translate-y-1 transition-all duration-300 ease-in-out inline-grid"
        // href={{
        //   pathname: `/anime/${anime.malId || anime.id || anime.malID}`,
        //   query: {
        //     // ep : 1,
        //     // title : anime.title.english
        //   },
        // }}
        // onClick={() => router.replace(`?id=${anime.malId || anime.id || anime.malID}`,{scroll:false})}
        // onClick={() =>
        //   enableIsModal(
        //     anime.mal_id || anime.malId || anime.id || anime.malID || anime.anime_id
        //   )
        // }
        onClick={() =>
          openModal(
            anime.mal_id ||
              anime.malId ||
              anime.id ||
              anime.malID ||
              anime.anime_id,
            anime.id || anime.anilistid
          )
        }
      >
        <div className={`card relative  overflow-hidden`}>
          <img
            className=" object-cover  h-[180px] md:h-[270px]  rounded-lg"
            src={anime.image || anime.image_url || anime?.images?.large}
            alt={anime?.title?.romaji}
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
              {anime?.score}
            </small>
          )}

          {anime.airingTime && (
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
              <RiTimeFill className="text-[#c5ff59] animate-pulse" />
              {formatTimestamp(anime.airingTime + 3600000)}
            </small>
          )}

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
            className={` p-2 z-50 whitespace-nowrap text-ellipsis overflow-hidden  text-start hover:before:scale-105`}
          >
            {anime.title?.romaji || anime.title}
          </small>
        </div>
      </div>
    </>
  );
}

export default Card;
