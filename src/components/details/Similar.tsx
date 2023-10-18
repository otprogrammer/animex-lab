"use client";
import React from "react";
import Link from "next/link";

function Similar({ Data }: any) {
  return (
    <div className="grid w-full grid-cols-1 xl:grid-cols-2 gap-2 p-4">
      {Data?.nodes?.length > 1
        ? Data?.nodes?.map((anime: any) => (
            <div
              key={anime?.mediaRecommendation?.id}
              className="flex gap-2 bg-[#3336] p-1"
            >
              <img className="w-[60px] h-[80px] " src={anime?.mediaRecommendation?.coverImage?.large} />
              <div className="flex flex-col w-full justify-between">
                <div className="flex items-center justify-between w-full">

                {/* <Link href={{ pathname : `/anime/${anime?.mediaRecommendation?.id}`,
              query : {
                anilistId : anime?.mediaRecommendation?.id
              }}}> */}
                  <small className=" p-1 text-start font-semibold cursor-pointer hover:text-blue-500">
                    {anime?.mediaRecommendation?.title?.userPreferred}
                  </small>
                {/* </Link> */}
                <span className="txt-primary px-2 ">{anime?.mediaRecommendation?.format}</span>

                  </div>
                <small className="text-gray-400 text-start p-1">
                  <span className="text-neutral-400">{anime?.mediaRecommendation?.status}</span>
                  
                </small>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default Similar;
