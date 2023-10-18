import React from "react";
import { AnimeRelation } from "../../../types/types";
import Link from "next/link";

export default function Relations({ data }: AnimeRelation[] | any) {
  return (
    <div className="grid w-full grid-cols-1 xl:grid-cols-2 gap-2 p-4">
      {data?.edges?.length > 1
        ? data?.edges?.map((anime: AnimeRelation) => (
            <div key={anime?.malId} className="flex gap-2 bg-[#3336] p-1">
              <img className="w-[60px] h-[80px] " src={anime?.node?.coverImage?.large} />
              <div className="flex w-full flex-col justify-between">
                <div className="flex items-center justify-between ">


                {/* <Link href={`/anime/${anime?.malId}`}> */}
                  <small className=" p-1 text-start font-semibold cursor-pointer hover:text-blue-500">
                    {anime?.node?.title?.userPreferred}
                  </small>
                {/* </Link> */}
                <span className="txt-primary px-2 ">{anime?.node?.format}</span>

                  </div>
                <small className="text-gray-400 text-start p-1">
                  <span className="text-neutral-400">{anime?.node?.status}</span>
                  
                </small>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
