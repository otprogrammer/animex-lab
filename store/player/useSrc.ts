"use client";
import { create } from "zustand";
import { AniSkip } from "../../types/types";
import { Highlight } from "@oplayer/ui";
import { useCallback, useMemo } from "react";
import { vttThumbnails } from "@oplayer/plugins";
import axios from "axios";
interface useSrcProps {
  data: any;
  src: string;
  poster: string;
  title: string;
  subtitles: SubtitleProps[];
  subs : any;
  fetchGogoSrc: (
    player,
    episodeId,
    lastEpisode,
    currentEpisode,
    animeData
  ) => void;
  fetchZoroSrc: (player, zoroId) => void;
}

export const useSrc = create<useSrcProps>((set, get) => ({
  data: {},
  src: "",
  title: "",
  poster: "",
  subtitles: [],
  subs : {},

  fetchGogoSrc: (player, episodeId, lastEpisode, currentEpisode, animeData) => {
    player?.current
      ?.changeSource(
        fetch(
          `https://animexgogoanimeapi.vercel.app/gogoanime/watch/${episodeId}-episode-${lastEpisode}`
        )
          .then((res) => res.json())
          .then((data) => {
            const src = data.sources ? data.sources[0]?.file : "";
            const title = currentEpisode?.title || "";
            const poster = currentEpisode?.image || animeData?.image_url;
            console.log(data);
            set(() => ({ data, src, title, poster }));

            // Assuming you want to update the state with the fetched data
            return {
              src: src,
              title: title,
              poster: poster,
            };
          })

          .finally(() => {
            // if (isAutoPlay) {
            //   player?.current?.togglePlay();
            // } else {
            //   player?.current?.pause();
            // }

            axios.get(
              `https://api.aniskip.com/v2/skip-times/${animeData?.mal_id}/${lastEpisode}?types=op&types=recap&types=mixed-op&types=ed&types=mixed-ed&episodeLength=0`
            )
              .then((res) => res.data)
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
      )
      .catch((error) => {
        console.error("Failed to fetch episode source:", error);
        // Handle error (possibly updating the state to reflect the error)
      });
  },
  fetchZoroSrc: (player, zoroId) => {
   

    player?.current?.changeSource(
      axios.get(
        `    https://aniwatch-api-eta.vercel.app/anime/episode-srcs?id=s${zoroId?.[0]?.replace(
          "/watch/",
          ""
        )}?ep=${zoroId?.[1]}&server=vidcloud&category=sub
            `
      )
        .then((res) => res.data)
        .then((data) => {
          const source =
            "https://ottocrs.vercel.app/cors?url=" + data.sources?.[0]?.url;
          // const title = currentEpisode?.title || "";
          // const poster = currentEpisode?.image || animeData?.image_url;
          //   updateSubtitle(data.tracks)

          let subtitlesList = data.tracks
            ?.filter((subtitle: SubtitleProps) => subtitle.label)
            .map((subtitle: SubtitleProps, index: number) => ({
              src: subtitle.file,
              default: subtitle.label === "English",
              name: subtitle.label,
            }));

            set(() => ({subtitles : subtitlesList,subs:data?.tracks}))
        //   player?.current?.changeSource({ src: src })

            return {
              src: source,

              // title: title,
              // poster: poster,
            };
        })
    )
    .then(() => {
        player?.current?.context.ui.subtitle.updateSource(get().subtitles);
        player?.current?.applyPlugin(
          vttThumbnails({
            src: get().subs?.filter(
              (t: { kind: string }) => t?.kind == "thumbnails"
            )[0]?.file,
          })
        );
      });
  },
}));
