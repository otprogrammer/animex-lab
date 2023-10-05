/* eslint-disable @next/next/no-img-element */
import WatchContainer from "@/components/Watch";
import AnimeDetails from "@/components/details/AnimeDetails";
import Link from "next/link";
import React from "react";
import supabase from "../../../../utils/supabase";



const fetchAnime = async (q:any,title:string | undefined) => {
  const {data} = await supabase.from("anime").select("*").or(`anime_id.eq.${q},mal_id.eq.${q}`)
  // let res = await req.json();
  return data;
};

type PageProps = {
  params: {
    animeId: any;
  };
  searchParams?: { 
    title : string;
   };
};

interface AnimeInfoProps {
  title: string;
  data: any;
}
const AnimeInfo = (props: AnimeInfoProps) => {
  return (
    <div className=" flex py-1 items-center ">
      <span
        className={`font-bold text-md ${
          props.title === "Genres" && "flex self-start"
        }`}
      >
        {props.title}:
      </span>
      <span className={`text-gray-300 capitalize px-1`}>{props.data}</span>
    </div>
  );
};

async function Anime({ params: { animeId },searchParams : query } : PageProps) {
  const getAnime = await fetchAnime(animeId,query?.title);

  console.log(query?.title)

  return (
    <div className="">
      <div
        className={` background-transparent w-full   lg:py-1 flex justify-center   md:mt-0  `}
      >
        <div
          className={`w-full flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-stretch z-[1] `}
        >
          

            

          <WatchContainer animeData={getAnime?.[0]} episodesList={getAnime?.[0]?.episodeslist} gogoId={getAnime?.[0]?.anime_id || animeId}/>
            

          
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
