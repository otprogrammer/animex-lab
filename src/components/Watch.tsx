/* eslint-disable @next/next/no-img-element */
"use client";
import React, {
  useEffect,
  useState,
  useRef,
  Fragment,
  useCallback,
} from "react";
import Player, { PlayerEvent, isMobile } from "@oplayer/core";
import ui, { Highlight } from "@oplayer/ui";
import hls from "@oplayer/hls";
//@ts-ignore
import ReactPlayer from "@oplayer/react";
import { chromecast } from "@oplayer/plugins";
import { useRouter, useSearchParams } from "next/navigation";
import { ADProps, AniSkip, AnimeInfo, GogoAnimeData, WatchProps } from "../../types/types";
import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react";
import addWatchList from "../../lib/Watchlist";
import { useThrottle } from "./player/UseThrottle";
import SettingsDropdown from "./SettingsDropdown";
import EpisodeContainer from "./watch/EpisodeContainer";
import Episodes from "./episodes/Episodes";

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
      <span className={` capitalize `}>
        <span className=""></span>

        {title == "Rank" ? "#" + data : data}
      </span>
    </div>
  );
};

export default function WatchContainer(props: WatchProps) {
  const [source, setSource] = useState("");
  const player = useRef<Player>(null);
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(true);
  const [showEpisodes, setShowEpisodes] = useState(true);
  const params = useSearchParams();
  const lst = useRef<any>(params.get("ep"));
  const [lastEpisode, setLastEpisode] = useState(lst.current ? lst.current : 1);
  const [gogoData, setGogoData] = useState<GogoAnimeData>()
  const epId = params.get("id")

  console.log(lst.current);


useEffect(() => {
  fetchGogoData()
},[])

  useEffect(() => {
    lst.current = lastEpisode;
  }, [lastEpisode]);

  const onTimeUpdate = useThrottle((currentTime: any) => {
    // setLastDuration(currentTime, player?.current?.duration);
  }, 1000);

  const handleEpisodeRoute = (epId:any,epNumber: number) => {
    setLastEpisode(epNumber);
    router.push(`?id=${epId?.split("-episode")[0]}&ep=${epNumber}`);
  };


  const fetchGogoData = async () => {
    let url = `https://api.animex.live/anime/gogoanime/info/${props.gogoId}`
    let req = await fetch(url)
    let res = await req.json()
    setGogoData(res)
  }

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
      } else if (payload.type == "ended") {
        // if (
        //   props.animeData?.episodeslist?.filter(
        //     (e: any) => e.number == parseInt(ep.current as any) + 1
        //   )[0]
        // ) {
        //   router.push(
        //     `/watching/${props.slug?.[0]}/${parseInt(ep.current as any) + 1}`
        //   );
        // }
      }
    },
    [lastEpisode]
  );

  useEffect(() => {
    player?.current?.changeSource(
      fetch(
        `https://aniscraper.up.railway.app/anime/gogoanime/watch/${epId}-episode-${lastEpisode}`
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
    ).then(() => {
      // player.current?.togglePlay();

      const d: any = player?.current?.duration;

      
        fetch(
          `https://api.aniskip.com/v2/skip-times/${props.animeData?.mal_id}/${lastEpisode}?types=op&types=recap&types=mixed-op&types=ed&types=mixed-ed&episodeLength=0`
        )
          .then((res) => res.json())
          .then((res) => {
            res = res as AniSkip;

            const highlights: Highlight[] = [];
            let opDuration = [],
              edDuration = [];

            if (res.statusCode === 200) {
              for (let result of res.results) {
                if (result.skipType === "op" || result.skipType === "ed") {
                  const { startTime, endTime } = result.interval;

                  if (startTime) {
                    highlights.push({
                      time: startTime,
                      text: result.skipType === "op" ? "OP" : "ED",
                    });
                    if (result.skipType === "op") opDuration.push(startTime);
                    else edDuration.push(startTime);
                  }

                  if (endTime) {
                    highlights.push({
                      time: endTime,
                      text: result.skipType === "op" ? "OP" : "ED",
                    });
                    if (result.skipType === "op") opDuration.push(endTime);
                    else edDuration.push(endTime);
                  }
                }
              }
            }
            player?.current?.emit("opedchange", [opDuration, edDuration]);
            player?.current?.context.ui.highlight(highlights);
          });
      }
    );
  }, [props.slug, lastEpisode]);

  console.log(epId)

  return (
    <>
      <div  className=" w-full flex flex-col lg:flex-row gap-6 mx-5">
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

          <EpisodeContainer
            title={props.animeData?.title}
            lastEpisode={lastEpisode}
          />


<div className=" rounded-md flex flex-col lg:flex-row gap-1 w-full p-2 ">
            <div className="w-full max-w-[200px] mx-auto ">
              <img
                src={props.animeData?.coverimage || gogoData?.image}
                className="w-[140px] h-[200px] mx-auto text-center lg:w-full lg:h-[300px] rounded-md object-cover"
              />
            </div>
            <div className="p-1 lg:px-3 w-full  text-left relative">
              <span className="absolute top-0 right-0 ">
                {/* <HeartSwitch
                    checked={click ? true : false}
                    onChange={handleClick}
                  /> */}
              </span>

              <div className="grid  md:grid-cols-2">
                <AD title={"Rank"} data={props.animeData?.rank || "?"} />

                <AD title={"Score"} data={props.animeData?.score || "N/A"} />
                <AD
                  title={"Duration"}
                  data={props.animeData?.duration || "N/A"}
                />

                <AD
                  title={"Status"}
                  data={props.animeData?.status || gogoData?.status}
                />
                <AD
                  title={"Title Japanese"}
                  data={
                    props.animeData?.title_japanese ||
                    gogoData?.otherName
                  }
                />

                <AD
                  title={"Release Date"}
                  data={props.animeData?.year || gogoData?.releaseDate}
                />
                <AD title={"Rating"} data={props.animeData?.rating || "N/A"} />
                <AD title={"Source"} data={props.animeData?.source || "N/A"} />
                <AD
                  title={"Premiered"}
                  data={props.animeData?.premiered || "N/A"}
                />
                <AD
                  title={"Studios"}
                  data={props.animeData?.studios?.map((s: any, i: number) => (
                    <span key={i}>{s.name}</span>
                  ))}
                />

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

          <div className="mx-2 p-2 lg:p-8 mt-2   w-full">
            <div className="flex flex-col gap-3">
              <p className={` font-light`}>
                {props.animeData?.synopsis}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[390px]">
          <div className="w-full flex gap-2 p-1 justify-end">
            <Icon
              onClick={() => setShowEpisodes((t) => !t)}
              icon="system-uicons:episodes"
              width={25}
              color="white"
              strokeWidth={1.5}
            />
            <SettingsDropdown />
          </div>

          {showEpisodes && (
            <div className="w-[360px]">
              {/* <div>
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
                        props.episodesList?.filter(
                          (ep: any) => ep.number === parseInt(lastEpisode) + 1
                        )[0]?.image
                      }
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className=" font-lighter">
                      {
                        props.episodesList?.filter(
                          (ep: any) => ep.number === parseInt(lastEpisode) + 1
                        )[0]?.title
                      }
                    </div>
                    <p className="text-zinc-400 font-extralight text-sm">
                      Episode{" "}
                      {
                        props.episodesList?.filter(
                          (ep: any) => ep.number === parseInt(lastEpisode) + 1
                        )[0]?.number
                      }
                    </p>
                  </div>
                </div>
              </div> */}

              <Episodes
                episodesList={props.animeData?.episodeslist || gogoData?.episodes}
                handleEpisodeRoute={handleEpisodeRoute}
                animeImg={gogoData?.image}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
