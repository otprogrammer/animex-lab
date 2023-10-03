import React from 'react'
import { Icon } from "@iconify/react";

type EpisodeContainerProps = {
    title:string;
    lastEpisode:number;
    handleNextEpisode:React.MouseEventHandler<SVGSVGElement> | undefined;
    handlePrevEpisode:React.MouseEventHandler<SVGSVGElement> | undefined;
    handleOpen:React.MouseEventHandler<HTMLElement> | undefined;
    download:string;

}

export default function EpisodeContainer({title,lastEpisode,handleNextEpisode,handlePrevEpisode,handleOpen,download} : EpisodeContainerProps) {
    const cls =
    "text-zinc-400 hover:txt-primary cursor-pointer flex items-center gap-1.5";
  return (
    <div className="p-2">
            <div className="flex justify-between">
              <div>{title}</div>
              <div className="flex gap-1">
                <Icon
                  onClick={handlePrevEpisode}
                  icon="bx:skip-previous-circle"
                  width={28}
                />
                <Icon
                  onClick={handleNextEpisode}
                  icon="bx:skip-next-circle"
                  width={28}
                />
              </div>
            </div>

            <small
              className="text-zinc-400 cursor-pointer"
            >
              Episode {lastEpisode}
            </small>

            <div className="flex  gap-5 justify-end">
              <span className={cls}>
                <Icon icon="mdi:thumb-up" color="white" width="24" />
              </span>
              <span className={cls}>
                <Icon icon="mdi:thumb-down" color="white" width="24" />
              </span>
              <a href={download} target='_blank' className={cls}>
                <Icon icon="bxs:cloud-download" color="white" width={28} />
                <span>DOWNLOAD</span>
              </a>
              <span onClick={handleOpen} className={cls}>
                <Icon icon="ic:baseline-flag" color="white" width="28" />
                <span>REPORT</span>
              </span>
            </div>
          </div>
  )
}
