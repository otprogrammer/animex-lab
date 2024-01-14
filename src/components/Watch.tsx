/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Player, { PlayerEvent, isMobile } from "@oplayer/core";
import ui, { Highlight } from "@oplayer/ui";
import hls from "@oplayer/hls";
import { $ } from '@oplayer/core';

//@ts-ignore
import ReactPlayer from "@oplayer/react";
import { chromecast, vttThumbnails } from "@oplayer/plugins";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  AniSkip,
  AnilistInfo,
  EpisodesListProps,
  GogoAnimeData,
  GogoEpisodesListProps,
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
import { Transition } from "@headlessui/react";
import axios from "axios";
import supabase from "../../utils/supabase";
import { appendMissingEpisodes } from "../../lib/appendeps";
import { HiSwitchHorizontal } from "react-icons/hi";
import danmaku from "@oplayer/danmaku";
import { AiOutlineClose } from "react-icons/ai";

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
      playbackRate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
      next:      '<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.444 3.685A10 10 0 0 1 18 4h-2v2h4a1 1 0 0 0 1-1V1h-2v1.253A12 12 0 1 0 24 12h-2A10 10 0 1 1 6.444 3.685ZM22 4v3h-3v2h4a1 1 0 0 0 1-1V4h-2Zm-9.398 11.576c.437.283.945.424 1.523.424s1.083-.141 1.513-.424c.437-.29.774-.694 1.009-1.215.235-.527.353-1.148.353-1.861 0-.707-.118-1.324-.353-1.851-.235-.527-.572-.932-1.009-1.215-.43-.29-.935-.434-1.513-.434-.578 0-1.086.145-1.523.434-.43.283-.764.688-.999 1.215-.235.527-.353 1.144-.353 1.851 0 .713.118 1.334.353 1.86.236.522.568.927.999 1.216Zm2.441-1.485c-.222.373-.528.56-.918.56s-.696-.187-.918-.56c-.222-.38-.333-.91-.333-1.591 0-.681.111-1.208.333-1.581.222-.38.528-.57.918-.57s.696.19.918.57c.222.373.333.9.333 1.581 0 .681-.111 1.212-.333 1.59Zm-6.439-3.375v5.14h1.594V9.018L7 9.82v1.321l1.604-.424Z" fill="currentColor"></path></svg>',

      setting:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
      // previous: '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">   <style type="text/css">       .st0{clip-path:url(#SVGID_2_);}      .st1{opacity:0.65;}       .st2{fill:#FFFFFF;}   </style>   <path class="st2" d="M20.7,2.1l-15.6,9v-9H3.3v19.8h1.8v-8.9l15.6,9V2.1z M18.9,18.8L7.1,12l11.8-6.8V18.8z"/></svg>',// enable previous,next button
      // next: '<svg style="transform: scale(0.7);" viewBox="0 0 1024 1024"><path d="M743.36 427.52L173.76 119.04A96 96 0 0 0 32 203.52v616.96a96 96 0 0 0 141.76 84.48l569.6-308.48a96 96 0 0 0 0-168.96zM960 96a32 32 0 0 0-32 32v768a32 32 0 0 0 64 0V128a32 32 0 0 0-32-32z"></path></svg>'
    },
  }),
  hls({forceHLS:true}),
  chromecast,
  //@ts-ignore
  vttThumbnails(),
];

const Msg = ({ title, message }: MsgProps) => {
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
  const lst = useRef<string | number | any>(params.get("ep"));
  const [lastEpisode, setLastEpisode] = useState(lst.current ? lst.current : 1);
  const [gogoData, setGogoData] = useState<GogoAnimeData>();
  const [epId, setEpId] = useState(
    params.get("id") ||
      (props.animeData?.episodeslist?.length > 1 &&
        props.animeData?.episodeslist?.[0]?.id?.split("-episode")[0])
  );

  const { ep, id } = useParams();
  const [click, setClick] = useState(false);
  const [gogoIframe, setGogoIframe] = useState("");
  const [download, setDownload] = useState("");
  const [isReport, setIsReport] = useState(false);
  const [anilistData, setAnilistData] = useState<AnilistInfo>();
  const [lastEpisodeDuration, setLastEpisodeDuration] = useState();
  const [isZoro, setIsZoro] = useState(false);
  const { isSort, enableIsSort, disableIsSort } = useSort();
  const { isAutoNext } = useAutoNext();
  const { isAutoPlay } = useAutoPlay();
  const [iframe, setIframe] = useState(false);
  const [episodesLoading, setEpisodesLoading] = useState(false);
  const [episodesList, setEpisodesList] = useState<any[] | any>(
    props.animeData?.episodeslist?.length !== 0
      ? props.animeData?.episodeslist
        : gogoData?.episodes
  );
  const [isSub, setIsSub] = useState(true);
  const [subtitles, setSubtitles] = useState([]);
  const [zoroSrc, setZoroSrc] = useState("");
  const [alert, setAlert] = useState(true);
  const currentEpisode =
    episodesList?.length >= 1 &&
    episodesList?.filter(
      (ep: EpisodesListProps) => ep?.number == lastEpisode
    )[0];
  const [zoroSrcLoading, setZoroSrcLoading] = useState(false);
  let zoroId = props.animeData?.zoroepisodes
    ?.filter((anime) => anime.number == lastEpisode)?.[0]
    ?.id?.split("$");

  zoroId = zoroId?.toString().split("/")[2].split("?ep=");
  const autoPlay =
    typeof window !== "undefined" && localStorage.getItem("autoPlay");

  useEffect(() => {
    if (props.animeData?.title?.includes("(Dub)")) {
      setIsSub(false);
    }
    fetchGogoData();
    fetchAnilistData();
    setLastEpisodeDuration(
      getWatchList().filter(
        (a: { episode: any; mal_id: string; anime_id: string }) =>
          a.episode == lastEpisode
            ? a.mal_id == props.animeData?.mal_id ||
              a.anime_id == props.animeData?.anime_id
            : 0
      )?.[0]?.duration
    );
    const current = getAnimeList().filter(
      (item: { anime_id: string; mal_id: string }) =>
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

  // useEffect(() => {
  //   player.current.context.ui.menu.register({})
  //   var forward = document.createElement("button");
  //   forward.className = "forward";
  //   forward.innerHTML =
  //     '<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.444 3.685A10 10 0 0 1 18 4h-2v2h4a1 1 0 0 0 1-1V1h-2v1.253A12 12 0 1 0 24 12h-2A10 10 0 1 1 6.444 3.685ZM22 4v3h-3v2h4a1 1 0 0 0 1-1V4h-2Zm-9.398 11.576c.437.283.945.424 1.523.424s1.083-.141 1.513-.424c.437-.29.774-.694 1.009-1.215.235-.527.353-1.148.353-1.861 0-.707-.118-1.324-.353-1.851-.235-.527-.572-.932-1.009-1.215-.43-.29-.935-.434-1.513-.434-.578 0-1.086.145-1.523.434-.43.283-.764.688-.999 1.215-.235.527-.353 1.144-.353 1.851 0 .713.118 1.334.353 1.86.236.522.568.927.999 1.216Zm2.441-1.485c-.222.373-.528.56-.918.56s-.696-.187-.918-.56c-.222-.38-.333-.91-.333-1.591 0-.681.111-1.208.333-1.581.222-.38.528-.57.918-.57s.696.19.918.57c.222.373.333.9.333 1.581 0 .681-.111 1.212-.333 1.59Zm-6.439-3.375v5.14h1.594V9.018L7 9.82v1.321l1.604-.424Z" fill="currentColor"></path></svg>';
  //   forward.onclick = function () {
  //     player?.current?.seek(player?.current?.currentTime + 10);
  //   };

  //   var backward = document.createElement("button");
  //   backward.className = "backward";
  //   backward.innerHTML =
  //     '<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.02 2.048A10 10 0 1 1 2 12H0a12 12 0 1 0 5-9.747V1H3v4a1 1 0 0 0 1 1h4V4H6a10 10 0 0 1 5.02-1.952ZM2 4v3h3v2H1a1 1 0 0 1-1-1V4h2Zm12.125 12c-.578 0-1.086-.141-1.523-.424-.43-.29-.764-.694-.999-1.215-.235-.527-.353-1.148-.353-1.861 0-.707.118-1.324.353-1.851.236-.527.568-.932.999-1.215.437-.29.945-.434 1.523-.434s1.083.145 1.513.434c.437.283.774.688 1.009 1.215.235.527.353 1.144.353 1.851 0 .713-.118 1.334-.353 1.86-.235.522-.572.927-1.009 1.216-.43.283-.935.424-1.513.424Zm0-1.35c.39 0 .696-.186.918-.56.222-.378.333-.909.333-1.59s-.111-1.208-.333-1.581c-.222-.38-.528-.57-.918-.57s-.696.19-.918.57c-.222.373-.333.9-.333 1.581 0 .681.111 1.212.333 1.59.222.374.528.56.918.56Zm-5.521 1.205v-5.139L7 11.141V9.82l3.198-.8v6.835H8.604Z" fill="currentColor"></path></svg>';
  //   backward.onclick = function () {
  //     player?.current?.seek(player?.current.currentTime - 10);
  //   };

  //   player?.current.$root.appendChild(backward);
  //   player?.current.$root.appendChild(forward);

  //   return () => {
  //     playerRef?.current?.destroy();
  //   };
  // }, []);
  const fetchDub = async () => {
    try {
      setEpisodesLoading(true);
      let url = `https://animexgogoanimeapi.vercel.app/gogoanime/info/${
        props.gogoId + "-dub"
      }`;
      let req = await axios.get(url);
      let res = req.data;

      const updatedEpisodesList = props.animeData?.episodeslist
        ?.map((episode, index) => {
          const dubEpisode = res.episodes?.find(
            (ep: { number: number }) => ep.number == episode?.number
          ); // Assuming res is an array containing dub episodes data

          if (dubEpisode) {
            return {
              ...episode,
              id: dubEpisode?.id,
              number: dubEpisode?.number,
            };
          }

          return null;
        })
        .filter(Boolean);

      setEpisodesList(updatedEpisodesList);
      console.log(updatedEpisodesList);
      setEpisodesLoading(false);
    } catch (error) {
      console.error(error);
      setEpisodesLoading(false);
      setEpisodesList([]);
    }
  };

  const subtitlesList = useMemo(() => {
    return subtitles
      ?.filter((subtitle: SubtitleProps) => subtitle.lang)
      .map((subtitle: SubtitleProps, index: number) => ({
        src: subtitle.url,
        default: subtitle.lang === "English",
        name: subtitle.lang,
      }));
  }, [subtitles]);

  const updateSubtitle = useCallback(() => {
    player?.current?.context.ui.subtitle.updateSource(subtitlesList);
    player?.current?.applyPlugin(
      vttThumbnails({
        src: subtitles?.filter(
          (t: { lang: string }) => t?.lang == "Thumbnails"
        )[0]?.url,
      })
    );
  }, [subtitles]);

  const fetchSub = async () => {
    setEpisodesLoading(true);
    if (props.animeData?.title?.includes("(Dub)")) {
      let { data } = await supabase
        .from("anime")
        .select("episodeslist")
        .eq("anime_id", props.gogoId?.split("-dub")[0]);

      setEpisodesList(data?.[0]?.episodeslist);
      setIsSub(true);

      setEpisodesLoading(false);
    } else {
      setEpisodesList(props.animeData?.episodeslist || gogoData?.episodes);
      setIsSub(true);
      setEpisodesLoading(false);
    }
  };

  console.log(zoroId)

  const fetchZoro = async () => {
    // https://api.anify.tv/sources?providerId=zoro&watchId=watch/${zoroId?.[0]}?ep=${zoroId?.[1]}&episodeNumber=${lastEpisode}&id=${props.animeData?.anilistid}&subType=sub
    let req = await fetch(
      `https://api.anify.tv/sources?providerId=zoro&watchId=watch/${zoroId?.[0]}?ep=${zoroId?.[1]}&episodeNumber=${lastEpisode}&id=${props.animeData?.anilistid}&subType=sub`
    );
    let res = await req.json();
    setZoroSrc(
      
        res.sources?.filter((t: { quality: string }) => t.quality == "auto")[0]
          ?.url
      
    );
    // setZoroSrc(
    //   `https://ottocors.vercel.app/cors?url=${
    //     res.sources?.filter((t: { quality: string }) => t.quality == "auto")[0]
    //       ?.url
    //   }`
    // );

    setSubtitles(res.subtitles);
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
    if (isZoro) {
      fetchZoro();
    }

    console.log(id);

    lst.current = lastEpisode;
  }, [lastEpisode, isZoro, params.get("id")]);

  const onTimeUpdate = useThrottle((currentTime) => {}, 1000);

  const handleEpisodeRoute = (epId: any, epNumber: number) => {
    setLastEpisode(epNumber);
    router.push(`?id=${epId?.split("-episode")[0]}&ep=${epNumber}`);
  };

  function handleClick() {
    if (click) {
      setClick(false);
      toast.error(
        <Msg
          title={props.animeData?.title || (gogoData?.title as string)}
          message="Was Removed From Your List"
        />,
        { theme: "dark" }
      );
      handleDeleteAnime(props.animeData);
    } else {
      handleAddAnime(props.animeData || gogoData);
      setClick(true);
      toast.success(
        <Msg
          title={props.animeData?.title || (gogoData?.title as string)}
          message="Was Added To Your List"
        />,
        { theme: "dark" }
      );
    }
  }


  

  const fetchGogoData = async () => {
    let url = `https://animexgogoanimeapi.vercel.app/gogoanime/info/${props.gogoId}`;
    let req = await fetch(url);
    let res = await req.json();
    setGogoData(res);
    if (
      !props.animeData?.episodeslist ||
      props.animeData?.episodeslist?.length < 1
    ) {
      setEpisodesList(res.episodes);
    }
    if (props.animeData?.episodeslist?.length != res.episodes?.length) {
      setEpisodesList(
        appendMissingEpisodes(props.animeData?.episodeslist, res.episodes)
      );
    }
    setEpId(res.episodes?.[0]?.id?.split("-episode")[0]);
  };

  const fetchAnilistData = async () => {
    let url = `https://ottoscraper.vercel.app/api/anilist/${props.animeData?.anilistid}`;
    let req = await fetch(url);
    let res = await req.json();
    setAnilistData(res);
    router.refresh();
  };

  const onEvent = useCallback(
    (payload: PlayerEvent) => {
      if (payload.type == "timeupdate") {
        onTimeUpdate(payload.payload.target.currentTime * 1000);
        console.log(currentEpisode?.id);
        addWatchList(
          currentEpisode?.id?.split("-episode")[0],
          null,
          lastEpisode,
          currentEpisode?.image ||
            props.animeData?.coverimage ||
            gogoData?.image,
          props.animeData?.title || gogoData?.title,
          Date.now(),
          player?.current?.duration || null,
          payload.payload.target.currentTime * 1000,
          props.animeData?.mal_id,
          props.animeData?.anilistid,
          props.animeData?.anime_id || gogoData?.id
        );

        typeof window !== "undefined" &&
          localStorage.setItem(
            "resumeId",
            JSON.stringify({
              title: props.animeData?.title,
              anime_id: currentEpisode?.id?.split("-episode")[0],
              episode: lastEpisode,
            })
          );
      } else if (payload.type == "ended" && isAutoNext == "true") {
        let getNextEp = props.animeData?.episodeslist?.filter(
          (e) => e.number == parseInt(lastEpisode) + 1
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
    [lastEpisode, isAutoNext, autoPlay, gogoData?.title, id]
  );

  useEffect(() => {
    !isZoro
      ? player?.current
          ?.changeSource(
            fetch(
              `https://animexgogoanimeapi.vercel.app/gogoanime/watch/${params.get(
                "id"
              )}-episode-${lastEpisode}`
            )
         
            // fetch('https://corsproxy.io/?' + encodeURIComponent(`https://prod-amvstrm-api.nyt92.eu.org/api/v2/stream/${params.get(
            //   "id"
            // )}-episode-${lastEpisode}`))
              .then((res) => res.json())
              .then((res) => {
                setGogoIframe(res?.Referer);
                setDownload(res?.download);
                // player?.current?.applyPlugin(
                //   vttThumbnails({
                //     src: res.stream.tracks.file,
                //   })
                // );
                return {
                  // src: res.sources?.filter(
                  //   (s: { quality: string }) => s.quality === "default"
                  // )?.[0].url,
                  src:res.sources[0].file,
                  title: currentEpisode?.title || "",
                  poster: currentEpisode?.image || "",
                };
              })
          )

          .then(() => {
            if (isAutoPlay) {
              player?.current?.togglePlay();
            } else {
              player?.current?.pause();
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
                        if (result.skipType === "op")
                          opDuration.push(startTime);
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
          })
      : player?.current
          ?.changeSource({
            src: zoroSrc,
          })
          .then(updateSubtitle)
          .then(() => {
            if (isAutoPlay) {
              player?.current?.togglePlay();
            } else {
              player?.current?.pause();
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
                        if (result.skipType === "op")
                          opDuration.push(startTime);
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
  }, [props.slug, lastEpisode, isZoro, zoroSrc, epId, params.get("id")]);
  
  
  return (
    <>
    <head>
      <title>
        {props.animeData?.title || gogoData?.title}
      </title>
    </head>
      <div className=" w-full flex flex-col lg:flex-row gap-6 mx-5 overflow-hidden">
        <div className="w-full ">
          <div className={`${params.get("ep") ? "block" : "hidden"}`}>
            {alert && (
              <div className="alert flex flex-col lg:flex-row gap-1.5 justify-between p-2 mb-2 rounded-xl bg-neutral-900">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <span className="text-sm">
                  Our website might shut down due to server costs. To keep it alive, we need your support. Please donate to help us continue providing our services. Thank you for your help!
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://ko-fi.com/ottoprogrammer"
                    target="_blank"
                    className="btn btn-sm capitalize rounded-lg hover:bg-neutral-900"
                  >
                    Support
                  </a>
                  <button
                    onClick={() => setAlert(false)}
                    className="p-2 rounded-full bg-black hover:bg-neutral-900"
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            )}
            <Transition
              appear={params.get("ep") ? true : false}
              as={"div"}
              show={true}
              enter="transform transition duration-500"
              enterFrom="opacity-0 translate-y-[500px] duration-[800ms] scale-[0.90]"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div className={`w-full  relative aspect-video`}>
                <ReactPlayer
                  plugins={plugins}
                  ref={player}
                  source={source}
                  onEvent={onEvent}
                  duration={lastEpisodeDuration}
                />
                
                
              </div>
            </Transition>

            <EpisodeContainer
              title={props.animeData?.title || (gogoData?.title as string)}
              lastEpisode={lastEpisode}
              download={download && download}
              handleOpen={() => setIsReport(true)}
              handleNextEpisode={handleNextEpisode}
              handlePrevEpisode={handlePrevEpisode}
              totalEpisodes={gogoData?.totalEpisodes || episodesList?.length}
            />
            <hr className=" border-zinc-700 w-[85%] mx-auto" />
          </div>

          {props.animeData?.status == "Currently Airing" &&
            anilistData?.nextAiringEpisode && (
              <div className="flex flex-col p-1">
                <AiringCountdown
                  episode={anilistData?.nextAiringEpisode?.episode as number}
                  airingAt={Math.floor(
                    new Date(
                      anilistData?.nextAiringEpisode?.airingAt
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
                handlePlay={() => router.push(
                  `?id=${currentEpisode?.id?.split("-episode")[0]}&ep=1
                    
                  }`)}
              />
            }
            Characters={anilistData?.characterPreview}
            Similar={anilistData?.recommendations}
            OP={props.animeData?.opening_themes}
            ED={props.animeData?.ending_themes}
            Relations={anilistData?.relations}
            Trailer={props.animeData?.trailer_url}
          />
        </div>

        <div className="lg:max-w-[410px] ">
          <div
            className={`w-full  rounded-sm ${
              showEpisodes ? "flex flex-row" : " flex flex-col"
            } justify-center items-center gap-2 p-1 `}
          >
            <div
              className={`dropdown ${
                isMobile ? "dropdown-start" : "dropdown-end "
              }cursor-pointer`}
            >
              <div
                title="Servers"
                className=" relative flex items-center gap-1"
                tabIndex={0}
              >
                <HiSwitchHorizontal size={24} color="white" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-neutral-800/90 rounded-box w-52"
              >
                <li
                  onClick={() => {
                    setIsZoro(false);
                    setIframe(false);
                  }}
                >
                  <a className={`${!isZoro && !iframe && "txt-primary"}`}>
                    Server 1
                  </a>
                </li>

                {props.animeData?.zoroepisodes?.length > 1 && (
                  <li onClick={() => setIsZoro(true)}>
                    <a className={`${isZoro && "txt-primary"}`}>Server 2</a>
                  </li>
                )}
                {/* {!isZoro && (
                  <li onClick={() => setIframe(true)}>
                    <a className={`${iframe && "txt-primary"}`}>Iframe (Ads)</a>
                  </li>
                )} */}
              </ul>
            </div>
            <label className="swap">
              <input type="checkbox" />

              <div
                className={`${
                  epId && epId?.includes("dub") ? "swap-off" : "swap-on"
                } txt-primary`}
                onClick={() => {
                  fetchDub();
                  setIsSub(false);
                }}
              >
                DUB
              </div>
              <div
                className={`${
                  epId && !epId?.includes("dub") ? "swap-off" : "swap-on"
                } txt-primary`}
                onClick={fetchSub}
              >
                SUB
              </div>
            </label>
            <div
              title="Sort Episodes"
              onClick={isSort ? disableIsSort : enableIsSort}
              aria-label="Sort Episodes"
              className=" relative cursor-pointer text-white hover:txt-primary self-center"
            >
              <LuArrowDownUp size={22} />
            </div>

            <div
              title="Show/Hide Eps"
              onClick={() => setShowEpisodes((t) => !t)}
              className="relative  cursor-pointer text-white hover:txt-primary"
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
          <div className={`${showEpisodes && "lg:w-[360px]"} `}>
            {showEpisodes && !episodesLoading && episodesList?.length >= 1 ? (
              <div className="lg:w-[360px]">
                <Episodes
                  episodesList={episodesList}
                  handleEpisodeRoute={handleEpisodeRoute}
                  animeImg={gogoData?.image as string}
                  episodeNumber={lastEpisode}
                />
              </div>
            ) : episodesList?.length < 1 ? (
              <div className="lg:w-[360px] flex justify-center mt-10 ">
                {" "}
                No Episodes Found{" "}
              </div>
            ) : (
              episodesLoading && (
                <div className="lg:w-[360px] flex justify-center mt-10 ">
                  <span className="loading loading-spinner text-error loading-lg"></span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {isReport && (
        <ReportModal isOpen={isReport} onClose={() => setIsReport(false)} />
      )}
    </>
  );
}
