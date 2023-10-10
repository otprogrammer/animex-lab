/* eslint-disable @next/next/no-img-element */
import WatchContainer from "@/components/Watch";
import AnimeDetails from "@/components/details/AnimeDetails";
import Link from "next/link";
import React from "react";
import supabase from "../../../../utils/supabase";

const fetchAnime = async (q: string | number, title: string | undefined) => {
  const { data } = await supabase
    .from("anime")
    .select("*")
    .or(`anime_id.eq.${q},mal_id.eq.${q}`).not("title","ilike","(Dub)");
  // let res = await req.json();
  return data;
};

type PageProps = {
  params: {
    animeId: any;
  };
  searchParams?: {
    title: string;
  };
};

interface AnimeInfoProps {
  title: string;
  data: any;
}

async function Anime({ params: { animeId }, searchParams: query }: PageProps) {
  const getAnime = await fetchAnime(animeId, query?.title);

  console.log(query?.title);

  return (
    <div className="">
      <div
        className={` background-transparent w-full   lg:py-1 flex justify-center   md:mt-0  `}
      >
        <div
          className={`w-full flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-stretch z-[1] `}
        >
          <WatchContainer
            animeData={getAnime?.[0]}
            episodesList={getAnime?.[0]?.episodeslist}
            gogoId={getAnime?.[0]?.anime_id || animeId}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Anime;

// export async function generateStaticParams() {

//   let req = await fetch(`https://ottodb.vercel.app/api/popular/1`)
//   let res = await req.json()

//   return res.map((a:any) => ({
//     animeId: a.url.toString(),
//   }))

// }
