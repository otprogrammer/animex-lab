import React from 'react'
import { Icon } from "@iconify/react";

import {TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled} from "react-icons/tb"


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
              <span className='text-[13px] md:text-lg'>{title}</span>
              <div className="flex gap-1  ">
                <div className='flex items-center max-h-[30px] rounded-md gap-1 py-0.5 md:py-1 px-2.5 bg-neutral-800/50 cursor-pointer hover:bg-[#e11d48] transition-all duration-300 ease-out'>

                <TbPlayerTrackPrevFilled
                  onClick={handlePrevEpisode}
                  className="text-white  "
                  // icon="bx:skip-next-circle"
                  size={18}
                />
                                  <span>Prev</span>

                </div>
                <div className='flex items-center max-h-[30px] rounded-md gap-1 py-0.5 md:py-1 px-2.5 bg-neutral-800/50 cursor-pointer hover:bg-[#e11d48] transition-all duration-300 ease-out'>
                <span>Next</span>


                <TbPlayerTrackNextFilled
                  onClick={handleNextEpisode}
                  className="text-white  "
                  // icon="bx:skip-next-circle"
                  size={18}
                />
                </div>
              </div>
            </div>

            <small
              className="text-zinc-400 cursor-pointer"
            >
              Episode {lastEpisode}
            </small>

            <div className="flex  gap-5 justify-end">
              <span className={cls}>
                <Icon icon="mdi:thumb-up" color="white" width="20" />
              </span>
              <span className={cls}>
                <Icon icon="mdi:thumb-down" color="white" width="20" />
              </span>
              <a href={download} target='_blank' className={cls}>
                <Icon icon="bxs:cloud-download" color="white" width={24} />
                <span>DOWNLOAD</span>
              </a>
              <span onClick={handleOpen} className={cls}>
                <Icon icon="ic:baseline-flag" color="white" width="24" />
                <span>REPORT</span>
              </span>
            </div>
          </div>
  )
}
