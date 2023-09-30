"use client";
import React, { useEffect, useState, useRef, Fragment } from "react";
import Player, { PlayerEvent, isMobile } from "@oplayer/core";
import ui from "@oplayer/ui";
import hls from "@oplayer/hls";
//@ts-ignore
import ReactPlayer from "@oplayer/react";
import { chromecast } from "@oplayer/plugins";
import { useRouter } from "next/navigation";
import { ADProps, AnimeInfo, WatchProps } from "../../types/types";
import { Icon } from "@iconify/react";
import { Dialog,Transition } from "@headlessui/react";



const plugins = [
  ui({
    pictureInPicture: true,
    slideToSeek: "always",
    screenshot: true,
    keyboard: { global: true },
    topSetting:true,
    theme: { primaryColor: "#e11d48" },
    
  }),
  hls(),
  chromecast,
];



const AD = ({title,data}:ADProps) => {

  return (
    <div className="flex flex-col py-1">
                  <span className=" font-bold txt-primary">{title}</span>
                  <span className={` capitalize text-zinc-300`}>
                    <span className="text-gray-400"></span>
                    
                    {title == 'Rank' ? "#" + data : data}
                  </span>
                </div>
  )
}

export default function WatchContainer(props: WatchProps) {
  const [source, setSource] = useState<string>("");
  const player = useRef<Player>(null);
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    player?.current?.changeSource(
      fetch(
        `https://aniscraper.up.railway.app/anime/gogoanime/watch/${props.slug?.[0]}-episode-${props.slug?.[1]}`
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
  }, [props.slug]);

  return (
    <>
    
    <div className="flex flex-col lg:flex-row gap-6 mx-5">
      
      <div className="w-full max-w-5xl">
        <div className={`w-full max-w-5xl relative aspect-video`}>
          <ReactPlayer
            plugins={plugins}
            ref={player}
            source={source}
            autoplay={false}
            onEvent={() => {}}
          />
        </div>

        <div className="p-2">
          <div>{props.animeData.title}</div>
          <small className="text-zinc-400 cursor-pointer">More Details...</small>
          <div className="flex gap-5 justify-end">
            <span className="text-zinc-400 hover:txt-primary cursor-pointer flex items-center gap-1.5">
              <Icon icon="mdi:thumb-up" color="white" width="24" />
            </span>
            <span className="text-zinc-400 hover:txt-primary cursor-pointer flex items-center gap-1.5">
              <Icon icon="mdi:thumb-down" color="white" width="24" />
            </span>
            <span className="text-zinc-400 hover:txt-primary cursor-pointer flex items-center gap-1.5">
              <Icon icon="bxs:cloud-download" color="white" width={28} />
              <span>DOWNLOAD</span>
            </span>
            <span onClick={() => setIsOpen(true)} className="text-zinc-400 hover:txt-primary cursor-pointer flex items-center gap-1.5">
              <Icon icon="ic:baseline-flag" color="white" width="28" />
              <span>REPORT</span>
            </span>
          </div>
        </div>
        <hr className="border-zinc-500" />

        <div className=" rounded-md flex flex-col lg:flex-row gap-1 w-full p-2 ">
          <div className="w-full max-w-[200px] mx-auto ">
            <img
              src={props.animeData?.coverimage || props.gogoData?.image}
              className="w-[140px] h-[200px] mx-auto text-center lg:w-full lg:h-[300px] rounded-md object-cover"
            />
            {/* <div className="p-1 text-gray-400">
      <div className="flex gap-1 items-center">
      <span><AiFillStar color="orange"/>
      </span>{mal?.score}</div>
      </div> */}
          </div>
          <div className="p-1 lg:px-3 w-full  text-left relative">
            <span className="absolute top-0 right-0 ">
              {/* <HeartSwitch
                    checked={click ? true : false}
                    onChange={handleClick}
                  /> */}
            </span>

            <div className="grid  md:grid-cols-2">
             
             
              

            
            
              <AD title={'Rank'} data= {props.animeData?.rank || "?" } />

<AD title={'Score'} data={props.animeData?.score || "N/A"} />
<AD title={'Duration'} data= {props.animeData?.duration || "N/A"} />


<AD title={'Status'} data= {props.animeData?.status || props.gogoData?.status} />
<AD title={'Title Japanese'} data={props.animeData?.title_japanese ||
                    props.gogoData?.otherNames} />


          <AD title={'Release Date'} data={props.animeData?.year || props.gogoData?.releaseDate} />
          <AD title={'Rating'} data= {props.animeData?.rating || "N/A"}/>
          <AD title={'Source'} data={props.animeData?.source || "N/A"} />
          <AD title={'Premiered'} data={props.animeData?.premiered || "N/A"} />
          <AD title={'Studios'} data={props.animeData?.studios?.map((s: any, i: number) => (
            <span key={i}>{s.name}</span>
            ))} />



              
            {/* {mal?.airing === "true" && (
          <div className="flex flex-col py-1  ">
            <span className="font-bold text-blue-600 ">Broadcast:</span>
            <span
              className={` capitalize px-1`}
            >
              {props.animeData?.broadcast || mal?.broadcast || "?"}
            </span>
          </div>
        )} */}
              
              
            </div>
            {/* <p className={`p-0 lg:p-2 ${theme.text.notselected} font-light`}>{mal?.synopsis}</p> */}
          </div>
        </div>
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

      <div>
        {props.episodesList?.map((ep: any, i: number) => (
          <div
            onClick={() => router.push(`/w/${props.slug?.[0]}/${ep.number}`)}
            key={i}
            className="flex gap-3 my-[8px]"
          >
            <div>
              <img className="flex-1 max-w-[170px] h-[100px] rounded-sm object-cover" src={ep.image} />
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
    </div>

    
    </>
  );
}
