import React from "react";
import { Icon } from "@iconify/react";

import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

import { HiSwitchHorizontal } from "react-icons/hi";
import { Button, Tooltip } from "@nextui-org/react";
import { BsInfo, BsInfoCircle } from "react-icons/bs";
import { useDetailsModal } from "../../../store/store";
import { FaInfoCircle } from "react-icons/fa";
import AiringCountdown from "../countdown/AiringCountDown";
import { AnimeInfo } from "../../../types/types";

type EpisodeContainerProps = {
  title: string;
  lastEpisode: number;
  handleNextEpisode: () => void;
  handlePrevEpisode: () => void;
  handleOpen: React.MouseEventHandler<HTMLElement> | undefined;
  download: string;
  totalEpisodes: number;
  animeData: AnimeInfo;
  anilistData: any;
};

export default function EpisodeContainer({
  title,
  lastEpisode,
  handleNextEpisode,
  handlePrevEpisode,
  handleOpen,
  download,
  totalEpisodes,
  animeData,
  anilistData,
}: EpisodeContainerProps) {
  const { openModal } = useDetailsModal();
  const cls =
    "text-zinc-400 hover:txt-primary cursor-pointer flex items-center gap-1";
  return (
    <div className="p-2 pb-4  shadow bg-black/30 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span className="flex items-center gap-2">{title} </span>
          {/* <Tooltip
            color="secondary"
            showArrow
            placement="bottom"
            content="View details"
          >
            <span className="w-fit text-white" onClick={openModal}>
              {" "}
              <FaInfoCircle />
            </span>
          </Tooltip> */}
        </div>

        <div className="flex gap-1  ">
          {lastEpisode != 1 && (
            <div
              onClick={handlePrevEpisode}
              aria-label="Prev Ep"
              className="flex tool relative items-center max-h-[30px] rounded-md gap-1 py-0.5 md:py-1 px-2.5 bg-neutral-800/80 cursor-pointer hover:bg-[#e11d48] transition-all duration-300 ease-out"
            >
              <TbPlayerTrackPrevFilled
                className="text-white  "
                // icon="bx:skip-next-circle"
                size={20}
              />
            </div>
          )}

          {totalEpisodes != lastEpisode && (
            <div
              aria-label="Next Ep"
              onClick={handleNextEpisode}
              className="flex items-center relative tool max-h-[30px] rounded-md gap-1 py-0.5 md:py-1 px-2.5 bg-neutral-800/80 cursor-pointer hover:bg-[#e11d48] transition-all duration-300 ease-out"
            >
              <TbPlayerTrackNextFilled
                className="text-white  "
                // icon="bx:skip-next-circle"
                size={20}
              />
            </div>
          )}
        </div>
      </div>

      <small className="text-zinc-400 cursor-pointer">
        Episode {lastEpisode}
      </small>

      <div className="flex text-[13px] md:text-lg  gap-4 justify-end ">
        {animeData?.status == "Currently Airing" &&
          anilistData?.nextAiringEpisode && (
            <div className="flex flex-col">
              <AiringCountdown
                episode={anilistData?.nextAiringEpisode?.episode as number}
                airingAt={Math.floor(
                  new Date(anilistData?.nextAiringEpisode?.airingAt).getTime()
                )}
              />
            </div>
          )}
      </div>

      {/* <div className="flex text-[13px] md:text-lg  gap-4 justify-end mt-2">
        <span className={cls}>
          <Icon
            className="text-white hover:txt-primary"
            icon="mdi:thumb-up"
            width="24"
          />
        </span>
        <span className={cls}>
          <Icon
            className="text-white hover:txt-primary"
            icon="mdi:thumb-down"
            width="24"
          />
        </span>

        <a href={download} target="_blank" className={cls}>
          <Icon icon="bxs:cloud-download" color="white" width={24} />
          <span>DOWNLOAD</span>
        </a>
        <span onClick={handleOpen} className={cls}>
          <Icon icon="ic:baseline-flag" color="white" width="24" />
          <span>REPORT</span>
        </span>
      </div> */}
    </div>
  );
}
