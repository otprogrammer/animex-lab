/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, useRef, Fragment, useCallback } from "react";
import Player, { PlayerEvent, isMobile } from "@oplayer/core";
import ui from "@oplayer/ui";
import hls from "@oplayer/hls";
//@ts-ignore
import ReactPlayer from "@oplayer/react";
import { chromecast } from "@oplayer/plugins";
import { useRouter, useSearchParams } from "next/navigation";
import { ADProps, AnimeInfo, WatchProps } from "../../types/types";
import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react";
import addWatchList from "../../lib/Watchlist";
import { useThrottle } from "./player/UseThrottle";
import SettingsDropdown from "./SettingsDropdown";

const plugins = [
  ui({
    pictureInPicture: true,
    slideToSeek: "always",
    screenshot: true,
    keyboard: { global: true },
    topSetting: true,
    theme: { primaryColor: "#e11d48" },
  }),
  hls(),
  chromecast,
];

const AD = ({ title, data }: ADProps) => {
  return (
    <div className="flex flex-col py-1">
      <span className=" font-bold txt-primary">{title}</span>
      <span className={` capitalize text-zinc-300`}>
        <span className="text-gray-400"></span>

        {title == "Rank" ? "#" + data : data}
      </span>
    </div>
  );
};

export default function WatchContainer(props: WatchProps) {
  const [source, setSource] = useState<string>("");
  const player = useRef<Player>(null);
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(true);
  const [showEpisodes, setShowEpisodes] = useState(true);
  const ep = useSearchParams()
  const lst = useRef<any>(ep.get("ep"))
  const [lastEpisode,setLastEpisode] = useState(lst.current ? lst.current : 1)
  const cls = "text-zinc-400 hover:txt-primary cursor-pointer flex items-center gap-1.5"
  console.log(lst.current)

  useEffect(() => {


    lst.current = lastEpisode
  },[lastEpisode])



  const onTimeUpdate = useThrottle((currentTime: any) => {
    // setLastDuration(currentTime, player?.current?.duration);
  }, 1000);


  const onEvent = useCallback(
    (payload: PlayerEvent) => {
      if (payload.type == "timeupdate") {
        onTimeUpdate(payload.payload.target.currentTime * 1000);
        addWatchList(
          props.slug,
          null,
          lastEpisode,
          props.animeData?.coverimage,
          props.animeData?.title,
          Date.now(),
          payload.payload.target.currentTime * 1000,
          props.animeData?.mal_id,
          props.animeData?.anilistid,
          props.animeData?.anime_id
        );
      } else if (payload.type == "ended" && isChkd.current && ep.current) {
        console.log("ended");
        console.log(isChkd.current);

        console.log(
          props.animeData?.episodeslist?.filter(
            (e: any) => e.number == parseInt(ep.current as any) + 1
          )[0]
        );
        if (
          props.animeData?.episodeslist?.filter(
            (e: any) => e.number == parseInt(ep.current as any) + 1
          )[0]
        ) {
          router.push(
            `/watching/${props.slug?.[0]}/${parseInt(ep.current as any) + 1}`
          );
        }
      }
    },
    [lastEpisode]
  )
  
  useEffect(() => {

    player?.current?.changeSource(
      fetch(
        `https://aniscraper.up.railway.app/anime/gogoanime/watch/${
          props.animeData.anime_id
        }-episode-${lastEpisode}`
      )
        .then((res) => res.json())
        .then((res) => {
          return {
            src: res.sources?.filter((s: any) => s.quality === "default")?.[0]
              .url,
            title: "Title",
            poster: "",
          };
        })
    );
  }, [props.slug,lastEpisode]);

  return (
    <>
      <div className=" w-full flex flex-col lg:flex-row gap-6 mx-5">
        <div className="w-full ">
          <div className={`w-full  relative aspect-video`}>
            <ReactPlayer
              plugins={plugins}
              ref={player}
              source={source}
              autoplay={false}
              onEvent={onEvent}
            />
          </div>

          <div className="p-2">
            <div className="flex justify-between">

            <div>{props.animeData.title}</div>
            <div className="flex gap-1">
            
              <Icon onClick={() => setLastEpisode((t : number) => t - 1)} icon="bx:skip-previous-circle" width={28} />
              <Icon onClick={() => setLastEpisode((t : number) => t +1)} icon="bx:skip-next-circle" width={28} />
              


              </div>
            </div>

            <small onClick={() => setShowEpisodes(t => !t)} className="text-zinc-400 cursor-pointer">
            Episode {lastEpisode}
              </small>

              
            <div className="flex flex-col xl:flex-row gap-5 justify-end">
              <span className={cls}>
                <Icon icon="mdi:thumb-up" color="white" width="24" />
              </span>
              <span className={cls}>
                <Icon icon="mdi:thumb-down" color="white" width="24" />
              </span>
              <span className={cls}>
                <Icon icon="bxs:cloud-download" color="white" width={28} />
                <span>DOWNLOAD</span>
              </span>
              <span
                onClick={() => setIsOpen(true)}
                className={cls}
              >
                <Icon icon="ic:baseline-flag" color="white" width="28" />
                <span>REPORT</span>
              </span>
            </div>
          </div>
          <hr className="border-zinc-500" />

          <div className="mx-2 p-2 lg:p-8 mt-2 bg-neutral-800  w-full">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 flex-wrap ">
                {props.animeData?.genres?.map((Item: any, index: number) => (
                  <span
                    key={index}
                    className=" py-1 px-5 mr-2 text-[#BDBDBDBD] border-[1px] border-[#BDBDBDBD] cursor-pointer flex justify-center whitespace-nowrap items-center transform hover:-translate-y-1 hover:text-gray-300 transition-transform duration-200"
                  >
                    {Item}
                  </span>
                ))}
              </div>

              <p className={` text-[#BDBDBD] font-light`}>
                {props.animeData?.synopsis}
              </p>
            </div>
          </div>
        </div>


        

<div className="max-w-[390px]">

<div  className="w-full flex gap-2 justify-end">
  

<Icon onClick={() => setShowEpisodes(t => !t)} icon="system-uicons:episodes" width={25}/>
<SettingsDropdown />



</div>

{showEpisodes && (

        <div className="w-[390px]">
          <div>
            <div>Up Next:</div>
            <div
              // onClick={() => router.push(`/w/${props.slug?.[0]}/${ep.number}`)}
              // key={i}
              className="flex gap-3 my-[8px]"
            >
              <div>
                <img
                  className="flex-1 max-w-[170px] h-[100px] rounded-sm object-cover"
                  src={
                    props.episodesList?.filter((ep: any) => ep.number === parseInt(lastEpisode) + 1)[0]
                      ?.image
                  }
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className=" font-lighter">
                  {
                    props.episodesList?.filter((ep: any) => ep.number === parseInt(lastEpisode) + 1)[0]
                      ?.title
                  }
                </div>
                <p className="text-zinc-400 font-extralight text-sm">
                  Episode{" "}
                  {
                    props.episodesList?.filter((ep: any) => ep.number === parseInt(lastEpisode) + 1)[0]
                      ?.number
                  }
                </p>
              </div>
            </div>
          </div>
          <hr  className="my-2 w-[80%] mx-auto border-zinc-500"/>

          <h1>
            Episodes:
          </h1>
          {props.episodesList?.map((ep: any, i: number) => (
            <div
              onClick={() => {
                
                setLastEpisode(ep.number)
                router.push(`?ep=${ep.number}`)
              
              }
              }
              key={i}
              className="flex gap-3 my-[8px]"
            >
              <div>
                <img
                  className="flex-1 max-w-[170px] h-[100px] rounded-sm object-cover"
                  src={ep.image}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className=" font-lighter">{ep.title}</div>
                <p className="text-zinc-400 font-extralight text-sm">
                  Episode {ep.number}
                </p>
              </div>
            </div>
          ))}
        </div>
)}
</div>
      </div>
    </>
  );
}
