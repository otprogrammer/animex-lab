import React from "react";
import { ADProps, AnimeInfo, GogoAnimeData } from "../../../types/types";
import { Icon } from "@iconify/react";
import { Skeleton } from "@nextui-org/react";

export const AD = ({ title, data }: ADProps) => {
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

interface OverViewProps {
  gogoData: GogoAnimeData;
  animeData: AnimeInfo;
  click: boolean;
  handleClick: () => void;
  handlePlay: () => void;
  anilistData:any;
}

export default function Overview({
  animeData,
  gogoData,
  click,
  handleClick,
  handlePlay,
  anilistData
}: OverViewProps) {
  return (
    <div
      style={
        {
          "--bg-image": `url(${`https://image.tmdb.org/t/p/original${animeData?.backdrop_path}`})`,
        } as any
      }
      className="syno pb-6"
    >
      <div
        className={`a_d rounded-md flex flex-col lg:flex-row gap-1 w-full p-2 `}
      >
        <div className="w-full z-50  max-w-[200px] mx-auto ">
          {/* <button className="p-2 w-full mx-auto  my-1 rounded-full">Watch</button> */}
          {animeData?.poster_path ||
                animeData?.coverimage ||
                gogoData?.image ? (
            <img
              src={
                (animeData?.poster_path &&
                  `https://image.tmdb.org/t/p/original${animeData?.poster_path}`) ||
                animeData?.coverimage ||
                gogoData?.image
              }
              className="w-[140px] h-[200px] mx-auto text-center lg:w-full lg:h-[300px] rounded-md object-cover"
            />
          ) : (
            <Skeleton className="w-[140px] h-[200px] mx-auto text-center lg:w-full lg:h-[300px] rounded-md object-cover" />
          )}
          <div className="flex justify-between py-1">
            <span
              onClick={handlePlay}
              aria-label="Play"
              className="tool relative"
            >
              <Icon
                width={26}
                icon="octicon:play-16"
                className=" text-white hover:txt-primary cursor-pointer"
                strokeWidth={2.5}
              />
            </span>

            <span className="">
              {/* this hidden checkbox controls the state */}

              {/* sun icon */}

              <label
                aria-label="Remove/Add To MyList"
                className="swap z-50 swap-rotate tool relative"
              >
                <input type="checkbox" />

                <Icon
                  onClick={handleClick}
                  className={`${
                    !click ? "swap-on" : "swap-off"
                  }swap-on fill-current hover:txt-primary  text-white`}
                  icon={`${
                    !click ? "zondicons:add-outline" : "dashicons:remove"
                  }`}
                  hFlip={true}
                  vFlip={true}
                  width={27}
                />
              </label>
            </span>
          </div>
        </div>
        <div className="p-1 lg:px-3 w-full  text-left relative">
          <div className="grid  md:grid-cols-2 2xl:grid-cols-3">
            <AD title={"Rank"} data={animeData?.rank || "?"} />

            <AD title={"Score"} data={animeData?.score || anilistData?.averageScore || "N/A"} />
            <AD title={"Duration"} data={animeData?.duration || "N/A"} />

            <AD
              title={"Status"}
              data={animeData?.status || gogoData?.status || "N/A"}
            />
            <AD
              title={"Title Japanese"}
              data={animeData?.title_japanese || gogoData?.otherName || "N/A"}
            />

            <AD
              title={"Release Date"}
              data={animeData?.year || gogoData?.releaseDate}
            />
            <AD title={"Episodes"} data={animeData?.episodes || anilistData?.episodes || "N/A"} />
            <AD title={"Rating"} data={animeData?.rating || "N/A"} />
            <AD title={"Source"} data={animeData?.source || "N/A"} />
            <AD title={"Premiered"} data={animeData?.premiered || "N/A"} />
            <AD title={"Season"} data={animeData?.season || "N/A"} />
            {animeData?.airing && (
              <AD title={"Broadcast"} data={animeData?.broadcast || "N/A"} />
            )}
            <AD
              title={"Studios"}
              data={animeData?.studios?.map((s, i: number) => (
                <span key={i}>{s.name}</span>
              ))}
            />
          </div>
        </div>
      </div>
      <div className="  p-2 lg:p-8 my-2 bg-neutral-900/75  w-full lg:w-[87%] mx-auto rounded-xl">
        <div className="flex flex-col gap-3">
          <p className={` font-light text-neutral-300`}>
            {animeData?.synopsis || gogoData?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
