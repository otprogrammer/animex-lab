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
import { $ } from "@oplayer/core";

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
import {
  useAutoNext,
  useAutoPlay,
  useDetailsModal,
  useSort,
} from "../../store/store";
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
import { useAuth } from "./hooks/Auth";
import { FaDonate } from "react-icons/fa";
import { revalidatePath } from "next/cache";
import DetailsModal from "./modals/DetailsModal";
import EpisodesController from "./episodes/EpisodesController";
import { plugins } from "./player/plugins";
import { addEpisodeToDatabase, saveAnimeToDb } from "../../lib/animetodatabase";
import { usePlayerStore } from "../../store/player/usePlayer";
import { useSrc } from "../../store/player/useSrc";

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
  const [download, setDownload] = useState("");
  const [isReport, setIsReport] = useState(false);
  const [anilistData, setAnilistData] = useState<AnilistInfo>();
  const [lastEpisodeDuration, setLastEpisodeDuration] = useState();
  const [isZoro, setIsZoro] = useState(false);
  const { isSort, enableIsSort, disableIsSort } = useSort();
  const { isAutoPlay, isAutoNext } = usePlayerStore();
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
  const [enableNextEp, setEnableNextEp] = useState(false);
  const currentEpisode =
    episodesList?.length >= 1 &&
    episodesList?.filter(
      (ep: EpisodesListProps) => ep?.number == lastEpisode
    )[0];
  const [zoroSrcLoading, setZoroSrcLoading] = useState(false);
  let zoroId =
    props.animeData?.zoroepisodes
      ?.filter((anime) => anime.number == lastEpisode)?.[0]
      ?.episodeId?.split("$") ||
    props.animeData?.zoroepisodes
      ?.filter((anime) => anime.number == lastEpisode)?.[0]
      ?.id?.split("$");

  zoroId = zoroId?.toString().split("?ep=");
  console.log("zoroid", zoroId);
  const { openModal } = useDetailsModal();

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

  const { user } = useAuth();

  const handleNextEpisode = () => {
    setLastEpisode(parseInt(lastEpisode) + 1);
    router.push(
      `?id=${currentEpisode?.id?.split("-episode")[0]}&ep=${
        parseInt(lastEpisode) + 1
      }`
    );
  };

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
      setEpisodesLoading(false);
    } catch (error) {
      console.error(error);
      setEpisodesLoading(false);
      setEpisodesList([]);
    }
  };

  const subtitlesList = useMemo(() => {
    return subtitles
      ?.filter((subtitle: SubtitleProps) => subtitle.label)
      .map((subtitle: SubtitleProps, index: number) => ({
        src: subtitle.file,
        default: subtitle.label === "English",
        name: subtitle.label,
      }));
  }, [subtitles]);

  const updateSubtitle = useCallback(() => {
    player?.current?.context.ui.subtitle.updateSource(subtitlesList);
    player?.current?.applyPlugin(
      vttThumbnails({
        src: subtitles?.filter(
          (t: { kind: string }) => t?.kind == "thumbnails"
        )[0]?.file,
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

  const fetchZoro = async () => {
    // https://api.anify.tv/sources?providerId=zoro&watchId=watch/${zoroId?.[0]}?ep=${zoroId?.[1]}&episodeNumber=${lastEpisode}&id=${props.animeData?.anilistid}&subType=sub
    // let req = await fetch(
    //   `https://api.anify.tv/sources?providerId=zoro&watchId=watch/${zoroId?.[0]}?ep=${zoroId?.[1]}&episodeNumber=${lastEpisode}&id=${props.animeData?.anilistid}&subType=sub`
    // );

    let req = await fetch(
      `    https://aniwatch-api-eta.vercel.app/anime/episode-srcs?id=s${zoroId?.[0]?.replace(
        "/watch/",
        ""
      )}?ep=${zoroId?.[1]}&server=vidcloud&category=sub
      `
    );

    let res = await req.json();
    // setZoroSrc(

    //     res.sources?.filter((t: { quality: string }) => t.quality == "auto")[0]
    //       ?.url

    // );

    setZoroSrc("https://ottocrs.vercel.app/cors?url=" + res.sources?.[0]?.url);
    // setZoroSrc(
    //   `https://ottocors.vercel.app/cors?url=${
    //     res.sources?.filter((t: { quality: string }) => t.quality == "auto")[0]
    //       ?.url
    //   }`
    // );

    setSubtitles(res.tracks);
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

    lst.current = lastEpisode;
  }, [lastEpisode, isZoro, params.get("id")]);

  const onTimeUpdate = useThrottle((currentTime) => {}, 1000);

  const handleEpisodeRoute = (epId: any, epNumber: number) => {
    setLastEpisode(epNumber);
    router.push(`?id=${epId?.split("-episode")[0]}&ep=${epNumber}`);
  };

  const { fetchGogoSrc, data, src, title, poster, fetchZoroSrc } = useSrc();

  console.log(src, poster, title);

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
      if (user?.id) {
        saveAnimeToDb(user?.id, props.animeData || gogoData);
      }
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
        if (player.current && player.current.duration) {
          const currentTime = player.current.currentTime;
          const remainingTime = player.current.duration - currentTime;

          if (remainingTime <= 20) {
            setEnableNextEp(true);
          }
        }
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
      } else if (payload.type == "ended" && isAutoNext ) {
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
    setEnableNextEp(false);

    setTimeout(() => {

      if (props.animeData?.anime_id || gogoData?.id && user?.id) {
        addEpisodeToDatabase({
          animeId: props.animeData?.anime_id || gogoData?.id,
          episodeId: currentEpisode?.id?.split("-episode")[0],
          episode: lastEpisode,
          duration: player?.current?.duration || null,
          year: props.animeData?.year,
          imageUrl:
            currentEpisode?.image ||
            props.animeData?.coverimage ||
            gogoData?.image,
          title: props.animeData?.title || gogoData?.title,
          userid: user?.id,
        });
      }
    },120000)

    !isZoro
      ? fetchGogoSrc(
          player,
          params.get("id"),
          lastEpisode,
          currentEpisode,
          props.animeData
        )
      : fetchZoroSrc(player, zoroId);
  }, [props.slug, lastEpisode, epId,isZoro, params.get("id")]);

  return (
    <>
      <head>
        <title>{props.animeData?.title || gogoData?.title}</title>
      </head>
      <div
        className={` w-full flex flex-col ${
          !showEpisodes ? "lg:flex-col" : "lg:flex-row"
        }  gap-6 mx-5 overflow-hidden`}
      >
        <div className="w-full ">
          <div className={`${params.get("ep") ? "block" : "hidden"}`}>
            {alert && (
              <div className="alert flex  gap-1.5 justify-between p-2 mb-2 rounded-xl bg-black/80">
                <div className="flex items-center gap-2 pl-2">
                  <FaDonate />

                  <span className="text-sm">Support Us!</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://ko-fi.com/ottoprogrammer"
                    target="_blank"
                    className="btn btn-sm capitalize rounded-lg bg-neutral-900"
                  >
                    Support
                  </a>
                  <button
                    onClick={() => setAlert(false)}
                    className="p-2 rounded-full hover:bg-neutral-900"
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
              <div className={`w-full  relative `}>
                <ReactPlayer
                  plugins={plugins}
                  ref={player}
                  aspectRatio={0}
                  source={source}
                  onEvent={onEvent}
                  duration={lastEpisodeDuration}
                  playing={isAutoPlay ? true : false}
                  // autoplay={true}
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
              animeData={props.animeData}
              anilistData={anilistData}
            />
            {props.animeData?.status == "Currently Airing" && (
              <hr className=" border-zinc-700 w-[85%] mx-auto" />
            )}
          </div>

          <div className="flex flex-col-reverse lg:flex-row mt-3">
            <DetailsTabs
              Overview={
                <Overview
                  animeData={props.animeData}
                  gogoData={gogoData as any}
                  anilistData={anilistData}
                  handleClick={handleClick}
                  click={click}
                  handlePlay={() =>
                    router.push(
                      `?id=${currentEpisode?.id?.split("-episode")[0]}&ep=1
                    
                  }`
                    )
                  }
                />
              }
              Characters={anilistData?.characterPreview}
              Similar={anilistData?.recommendations}
              OP={props.animeData?.opening_themes}
              ED={props.animeData?.ending_themes}
              Relations={anilistData?.relations}
              Trailer={props.animeData?.trailer_url}
            />

            <div
              className={`w-full ${
                showEpisodes ? "max-w-full lg:max-w-[500px]" : "max-w-full"
              } `}
            >
              <EpisodesController
                animeData={props.animeData}
                epId={epId}
                isZoro={isZoro}
                setShowEpisodes={setShowEpisodes}
                fetchSub={fetchSub}
                setIsSub={setIsSub}
                fetchDub={fetchDub}
                setIsZoro={setIsZoro}
              />
              {/* <hr className=" border-zinc-800 mx-auto mb-2" /> */}
              <div className={`${showEpisodes && ""} `}>
                {!episodesLoading && episodesList?.length >= 1 ? (
                  <div className="">
                    <Episodes
                      episodesList={episodesList}
                      handleEpisodeRoute={handleEpisodeRoute}
                      animeImg={gogoData?.image as string}
                      episodeNumber={lastEpisode}
                      showEpisodes={showEpisodes}
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
        </div>
      </div>

      <DetailsModal
        anilistData={anilistData}
        animeData={props.animeData}
        click={click}
        currentEpisode={currentEpisode}
        gogoData={gogoData}
        handleClick={handleClick}
      />
      {isReport && (
        <ReportModal isOpen={isReport} onClose={() => setIsReport(false)} />
      )}
    </>
  );
}
