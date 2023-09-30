/* eslint-disable @next/next/no-img-element */
import WatchContainer from "@/components/Watch";
import AnimeDetails from "@/components/details/AnimeDetails";
import Link from "next/link";
import React from "react";

const fetchAnime = async (animeId: any) => {
  let req = await fetch(`https://ottoex.vercel.app/api/a/${animeId}`);
  let res = await req.json();
  return res;
};

type PageProps = {
  params: {
    animeId: any;
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

async function Anime({ params: { animeId } }: PageProps) {
  const getAnime = await fetchAnime(animeId);

  return (
    <div className="text-white">
      <div
        className={` background-transparent w-full text-white py-2 lg:py-1 flex justify-center  mt-[4.8rem] md:mt-0  `}
      >
        <div
          className={`w-full flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-stretch z-[1] `}
        >
          <div className=" w-full ml-2 bg-neutral-900  rounded-lg  w-8/12 lg:w-auto h-fit my-1  shadow-2xl ">
            <div className="relative mx-auto w-fit ">
              {getAnime[0] || getAnime[0] ? (
                <div className="mt-3">

                  <img
                    src={
                      (getAnime[0].poster_path &&
                        `https://image.tmdb.org/t/p/original${getAnime[0].poster_path}`) ||
                      getAnime[0].coverimage
                    }
                    className="w-[175px] h-[268px] md:w-full md:h-[319px] rounded-sm mx-auto object-cover"
                    alt="image"
                  />
                  </div>
              ) : (
                <div className="w-full h-[268px] md:w-full md:h-[319px] rounded-sm mx-auto flex items-center justify-center ">
                  <ClipLoader color="#36d7b7" />
                </div>
              )}
            </div>
            

            <div className="h-[2px] bg-neutral-800 my-1.5 w-[70%] mx-auto" />
            {/* <AiFillStar color="#ffd530e8" /> */}

            <AnimeDetails {...getAnime[0]} />
            <div className="flex justify-around gap-1 p-2"></div>
          </div>

          <WatchContainer animeData={getAnime[0]} episodesList={getAnime[0].episodeslist}/>

          
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
