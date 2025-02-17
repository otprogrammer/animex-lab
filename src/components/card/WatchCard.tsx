"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimeInfo } from "../../../types/types";
import { Icon } from "@iconify/react";
import ProgressBar from "./ProgressBar";
import { DeleteWatchListId } from "../../../lib/Watchlist";
import TimeAgo from "./TimeAgo";
import { handleDeleteAnime } from "../../../lib/bookmark";
import { useAuth } from "../hooks/Auth";
import supabase from "../../../utils/supabase";
import { BsPlayFill } from "react-icons/bs";

interface WatchListProps {
  id: string;
  anilistid: number;
  anime_id: string;
  duration: number;
  episode: string;
  image_url: string;
  mal_id: string;
  time: number;
  title: string;
  vidTime: number;
  refresh: () => void;
  heading?: string;
}

function WatchCard(anime: WatchListProps) {
  const [showDelete, setShowDelete] = useState(false);
  const {user} = useAuth()

  console.log(user?.id)

  return (
    <div
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      className="group animate-appearance-in relative"
    >


      {showDelete && (
        <span
          onClick={async () => {
            if (anime.heading === "WatchList") {
              DeleteWatchListId(anime.anime_id);
            } else {
              await supabase.rpc("delete_watchlist_id",{
                user_id : user?.id,
                anime_id : anime.anime_id
            
            })
            }
            anime.refresh();
          }}
          className="absolute top-0 right-1 z-50 hover:bg-red-500 cursor-pointer bg-neutral-700/75 rounded-full p-1 mt-1"
        >
          <span
            className="text-white  font-semibold"
            style={{ textShadow: "rgb(0, 0, 0) 1px 1px 5px" }}
          >
            <Icon icon="line-md:remove" width={15} />
          </span>
        </span>
      )}
      <Link
        className="  w-full   transition-all duration-300 ease-in-out inline-grid"
        href={`/anime/${anime.anime_id}?id=${anime.id}&ep=${anime.episode}`}
      >
        <div
          className={`card relative ${
            anime.heading === "WatchList" || anime.heading === "User WatchList"
              ? "h-[125px] md:h-[165px]"
              : "h-[180px] md:h-[270px]"
          }   overflow-hidden `}
        >
          <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={` hidden opacity-0 bg-white/50 z-50  group-hover:flex group-hover:opacity-90 items-center justify-center   hover:text-red-600 rounded-full shadow  w-12 h-12`}
                >
                  <BsPlayFill size={30} />
                </div>
              </div>
          <img
            className=" object-cover overflow-hidden h-[165px] group-hover:scale-110 group-hover:opacity-70  shadow-xl hover:scale-110 transition-all duration-300 ease-in-out rounded-lg"
            src={anime.image_url}
            alt={anime.title}
          />
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
            {anime.title}
          </small>
          {/* <span className="absolute top-1 left-2 bg-black/70 px-2 py-0 rounded-sm">
            <span
              className="text-white font-semibold"
              style={{ textShadow: "rgb(0, 0, 0) 1px 1px 5px" }}
            >
              {anime.episode}
            </span>
          </span> */}

          <ProgressBar mainTime={anime.vidTime} currentTime={anime.duration} />
        </div>
      </Link>
      <div className="flex justify-between items-center mb-3">
        <span className="text-neutral-300 text-start">
          Episode{" "}
          <span className="txt-primary font-semibold"> {anime.episode}</span>
        </span>
        <TimeAgo timestamp={anime.time} />
      </div>
    </div>
  );
}

export default WatchCard;
