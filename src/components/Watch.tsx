/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import Player, { PlayerEvent } from "@oplayer/core";
import ui, { Highlight } from "@oplayer/ui";
import hls from "@oplayer/hls";
import ReactPlayer from "@oplayer/react";
import { chromecast, vttThumbnails } from "@oplayer/plugins";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AniSkip,
  AnilistInfo,
  GogoAnimeData,
  WatchProps,
} from "../../types/types";
import { Icon } from "@iconify/react";
import addWatchList from "../../lib/Watchlist";
import { useThrottle } from "./player/UseThrottle";
import SettingsDropdown from "./SettingsDropdown";
import EpisodeContainer from "./watch/EpisodeContainer";
import Episodes from "./episodes/Episodes";
import { handleAddAnime, handleDeleteAnime } from "../../lib/bookmark";
import { toast } from "react-toastify";
import ReportModal from "./modal/ReportModal";
import { useAutoNext, useAutoPlay, useSort } from "../../store/store";
import AiringCountdown from "./countdown/AiringCountDown";
import DetailsTabs from "./tabs/DetailsTabs";
import Overview from "./details/Overview";
import { getAnimeList } from "./watchlist/getAnimeList";
import { getWatchList } from "./watchlist/getWatchList";
import { LuArrowDownUp } from "react-icons/lu";
import { skipOpEd } from "../../lib/skip-op-es";

const plugins = [
  skipOpEd(),
  ui({
    pictureInPicture: true,
    slideToSeek: "always",
    screenshot: false,
    keyboard: { global: true },
    theme: {
      primaryColor: "#e11d48",
      watermark: {
        src: "/logo/favicon-1.png",
        style: {
          position: "absolute",
          // want make screenshot include watermark?
          // set positioning here, not css. [top, left, right, bottom]
          top: "10px",
          right: "10px",
          width: "40px",
          height: "auto",
        },
        attrs: {
          class: "watermark",
          // crossOrigin: 'anonymous'
          // etc.
        },
      },
    },
    topSetting: true,
    icons: {
      setting:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
      // previous: '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">   <style type="text/css">       .st0{clip-path:url(#SVGID_2_);}      .st1{opacity:0.65;}       .st2{fill:#FFFFFF;}   </style>   <path class="st2" d="M20.7,2.1l-15.6,9v-9H3.3v19.8h1.8v-8.9l15.6,9V2.1z M18.9,18.8L7.1,12l11.8-6.8V18.8z"/></svg>',// enable previous,next button
      // next: '<svg style="transform: scale(0.7);" viewBox="0 0 1024 1024"><path d="M743.36 427.52L173.76 119.04A96 96 0 0 0 32 203.52v616.96a96 96 0 0 0 141.76 84.48l569.6-308.48a96 96 0 0 0 0-168.96zM960 96a32 32 0 0 0-32 32v768a32 32 0 0 0 64 0V128a32 32 0 0 0-32-32z"></path></svg>'
    },
  }),
  hls(),
  chromecast,
  // @ts-ignore
  // type fix next version
  vttThumbnails()
];

const Msg = ({ title, message }: any) => {
  return (
    <div className="flex flex-col">
      <span>
        <span className="font-bold text-gray-200">{title}</span> {message}
      </span>

      <span className="text-blue-800 text-xl "></span>
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
  const [gogoData, setGogoData] = useState<GogoAnimeData>();
  const [epId, setEpId] = useState(
    params.get("id") ||
      (props.animeData?.episodeslist?.length > 1 &&
        props.animeData?.episodeslist?.[0]?.id?.split("-episode")[0])
  );
  const [click, setClick] = useState(false);
  const [gogoIframe, setGogoIframe] = useState("");
  const [download, setDownload] = useState("");
  const [isReport, setIsReport] = useState(false);
  const [anilistData, setAnilistData] = useState<AnilistInfo>();
  const [lastEpisodeDuration, setLastEpisodeDuration] = useState();
  const [isZoro,setIsZoro] = useState(false)
  const { isSort, enableIsSort, disableIsSort } = useSort();
  const { isAutoNext } = useAutoNext();
  const { isAutoPlay } = useAutoPlay();

  const currentEpisode: any =
    props.episodesList?.length >= 1 &&
    props.episodesList?.filter((ep: any) => ep?.number == lastEpisode)[0];

    let id = props.animeData?.zoroepisodes?.filter((anime: any) => anime.number ==lastEpisode)?.[0]
    ?.id?.split("$");

    id = id?.toString().split("/")[2].split("?ep=")

  useEffect(() => {
    fetchGogoData();
    fetchAnilistData();
    setLastEpisodeDuration(
      getWatchList().filter((a: any) =>
        a.episode == lastEpisode
          ? a.mal_id == props.animeData?.mal_id ||
            a.anime_id == props.animeData?.anime_id
          : 0
      )?.[0]?.duration
    );
    const current = getAnimeList().filter(
      (item: any) =>
        item.anime_id == props.animeData?.anime_id ||
        item.mal_id == props.animeData?.mal_id
    );
    current.length > 0 ? setClick(true) : setClick(false);
  }, []);

  const handleNextEpisode = () => {
    setLastEpisode(parseInt(lastEpisode) + 1);
    router.push(
      `?id=${currentEpisode?.id?.split("-episode")[0]}&ep=${
        parseInt(lastEpisode) + 1
      }`
    );
  };

  const handlePrevEpisode = () => {
    setLastEpisode(parseInt(lastEpisode) - 1);
    router.push(
      `?id=${currentEpisode?.id?.split("-episode")[0]}&ep=${
        parseInt(lastEpisode) - 1
      }`
    );
  };
  useEffect(() => {
    lst.current = lastEpisode;
  }, [lastEpisode]);

  const onTimeUpdate = useThrottle((currentTime: any) => {
    // setLastDuration(currentTime, player?.current?.duration);
  }, 1000);

  const handleEpisodeRoute = (epId: any, epNumber: number) => {
    setLastEpisode(epNumber);
    router.push(`?id=${epId?.split("-episode")[0]}&ep=${epNumber}`);
  };

  function handleClick() {
    if (click) {
      setClick(false);
      toast.error(
        <Msg
          title={props.animeData?.title}
          message="Was Removed From Your List"
        />,
        { theme: "dark" }
      );
      handleDeleteAnime(props.animeData);
    } else {
      handleAddAnime(props.animeData);
      setClick(true);
      toast.success(
        <Msg title={props.animeData?.title} message="Was Added To Your List" />,
        { theme: "dark" }
      );
    }
  }

  const fetchGogoData = async () => {
    let url = `https://api.animex.live/anime/gogoanime/info/${props.gogoId}`;
    let req = await fetch(url);
    let res = await req.json();
    setGogoData(res);
    setEpId(res.episodes?.[0]?.id?.split("-episode")[0]);
  };

  const fetchAnilistData = async () => {
    let url = `https://api.animex.live/meta/anilist/info/${props.animeData?.anilistid}`;
    let req = await fetch(url);
    let res = await req.json();
    setAnilistData(res);
    router.refresh();
  };

  const onEvent = useCallback(
    (payload: PlayerEvent) => {
      if (payload.type == "timeupdate") {
        onTimeUpdate(payload.payload.target.currentTime * 1000);
        addWatchList(
          props.slug || props.gogoId,
          null,
          lastEpisode,
          props.animeData?.coverimage || gogoData?.image,
          props.animeData?.title || gogoData?.title,
          Date.now(),
          player?.current?.duration || null,
          payload.payload.target.currentTime * 1000,
          props.animeData?.mal_id,
          props.animeData?.anilistid,
          props.animeData?.anime_id || gogoData?.id
        );
      } else if (payload.type == "ended" && isAutoNext) {
        let getNextEp = props.animeData?.episodeslist?.filter(
          (e: any) => e.number == parseInt(lastEpisode) + 1
        )[0];

        if (getNextEp) {
          setLastEpisode(parseInt(lastEpisode) + 1);
          router.push(
            `?id=${getNextEp?.id?.split("-episode")?.[0]}&ep=${
              parseInt(lastEpisode) + 1
            }`
          );
        }
      }
    },
    [lastEpisode, isAutoNext, isAutoPlay, gogoData?.title]
  );

  useEffect(() => {
    player?.current
      ?.changeSource(
        !isZoro ?
        fetch(
          `https://aniscraper.up.railway.app/anime/gogoanime/watch/${epId}-episode-${lastEpisode}`
        )
          .then((res) => res.json())
          .then((res) => {
            setGogoIframe(res?.headers?.Referer);
            setDownload(res?.download);
            return {
              src: res.sources?.filter((s: any) => s.quality === "default")?.[0]
                .url,
              title: "Title",
              poster: "",
            };
          })
     : fetch(
      `https://aniscraper.up.railway.app/anime/zoro/watch?episodeId=${id?.[0]}$episode$${id?.[1]}$both&server=vidcloud`
      )
        .then((res) => res.json())
        .then((res) => {
          player.current!.context.ui.changThumbnails({
            src: res?.subtitles?.filter((t:any)=> t?.lang == "Thumbnails")[0]?.url
          })
          player.current!.context.ui.subtitle.updateSource(res?.subtitles?.map((a:any) => (
            {
              name: a?.lang,
               default: false,
               src: a?.url
             }
            
          ) ))
          return {
            src: `https://ottocors.vercel.app/cors?url=${
              res.sources?.filter((t: any) => t.quality == "auto")[0]?.url
            }`,
            title: props.title,
            poster: props.episodesList?.filter(
              (ep: any) => ep.number == props.slug?.[1]
            )[0]?.image,
            
          };
        })
 )
      .then(() => {
        if (isAutoPlay) {
          player.current?.togglePlay();
        }

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
      });
  }, [props.slug, lastEpisode, epId]);

  return (
    <>
      <div className=" w-full flex flex-col lg:flex-row gap-6 mx-5 overflow-hidden">
        <div className="w-full ">
          <div className={`w-full  relative aspect-video`}>
            <ReactPlayer
              plugins={plugins}
              ref={player}
              source={source}
              autoplay={false}
              onEvent={onEvent}
              duration={lastEpisodeDuration}
            />
          </div>

          <EpisodeContainer
            title={props.animeData?.title || (gogoData?.title as string)}
            lastEpisode={lastEpisode}
            download={download && download}
            handleOpen={() => setIsReport(true)}
            handleNextEpisode={handleNextEpisode}
            handlePrevEpisode={handlePrevEpisode}
            totalEpisodes={
              gogoData?.totalEpisodes || props.episodesList?.length
            }
          />

          <hr className=" border-zinc-700 w-[85%] mx-auto" />

          {props.animeData?.status == "Currently Airing" &&
            anilistData?.nextAiringEpisode && (
              <div className="flex flex-col p-1">
                <AiringCountdown
                  episode={anilistData?.nextAiringEpisode?.episode as number}
                  airingAt={Math.floor(
                    new Date(
                      anilistData?.nextAiringEpisode?.airingTime
                    ).getTime()
                  )}
                />
              </div>
            )}

          <DetailsTabs
            Overview={
              <Overview
                animeData={props.animeData}
                gogoData={gogoData as any}
                handleClick={handleClick}
                click={click}
              />
            }
            Characters={anilistData?.characters}
            Similar={anilistData?.recommendations}
            OP={props.animeData?.opening_themes}
            ED={props.animeData?.ending_themes}
            Relations={anilistData?.relations}
            Trailer={"Trailer"}
          />
        </div>

        <div className="max-w-[410px] mx-auto">
          <div className={`w-full ${showEpisodes ? "flex flex-row" : " flex flex-col"} justify-center gap-2 p-1 `}>
            <div
              onClick={isSort ? disableIsSort : enableIsSort}
              aria-label="Sort Episodes"
              className="tool relative cursor-pointer text-white hover:txt-primary self-center"
            >
              <LuArrowDownUp size={22} />
            </div>

            <div
              onClick={() => setShowEpisodes((t) => !t)}
              className="relative tool cursor-pointer text-white hover:txt-primary"
              aria-label="Show/Hide Eps"
            >
              <Icon
                icon="system-uicons:episodes"
                width={25}
                strokeWidth={1.5}
              />
            </div>
            <SettingsDropdown />
          </div>
          <hr className="w-[70%] border-zinc-800 mx-auto mb-2" />

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
                episodesList={
                  props.animeData?.episodeslist || gogoData?.episodes
                }
                handleEpisodeRoute={handleEpisodeRoute}
                animeImg={gogoData?.image as string}
                episodeNumber={lastEpisode}
              />
            </div>
          )}
        </div>
      </div>

      {isReport && (
        <ReportModal isOpen={isReport} onClose={() => setIsReport(false)} />
      )}
    </>
  );
}
