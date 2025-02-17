"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimeInfo } from "../../../types/types";
import { Icon } from "@iconify/react";
import ProgressBar from "./ProgressBar";
import { DeleteWatchListId } from "../../../lib/Watchlist";
import TimeAgo from "./TimeAgo";
import { handleDeleteAnime } from "../../../lib/bookmark";
import supabase from "../../../utils/supabase";
import { useAuth } from "../hooks/Auth";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { DeleteAnimeFromDb } from "@/app/actions";
import { BsPlayFill, BsStarFill } from "react-icons/bs";

interface WatchListProps {
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
  image: string;
  id: string;
}

function ListCard(anime: WatchListProps) {
  const [showDelete, setShowDelete] = useState(false);
  const {user} = useAuth()
  const router = useRouter()
  return (
    <div
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      className="group animate-appearance-in  max-w-fit relative"
    >




      {showDelete && (
        <span
          
          onClick={async () => {
            if (anime.heading !== "UserList") {
              handleDeleteAnime(anime);

            } else {
              // DeleteAnimeFromDb(user?.id,anime?.id)
              // router.refresh()
              await supabase.rpc("delete_fav_anime",{
                user_id : user?.id,
                anime_id : anime?.id
            
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
        href={`/anime/${anime.anime_id || anime.id}`}
      >
        <div
          className={`card relative ${
            anime.heading === "WatchList"
              ? "max-h-[165px]"
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
          <img
            className=" object-cover overflow-hidden group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-in-out  rounded-sm"
            src={anime?.coverimage || anime.image_url || anime.image}
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
          <span className="absolute top-1 left-2 bg-black/70 px-2 py-0 rounded-sm">
            <span
              className="text-white font-semibold"
              style={{ textShadow: "rgb(0, 0, 0) 1px 1px 5px" }}
            >
              {anime.episode}
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ListCard;
