import Link from "next/link";
import React from "react";

const getTrending = async () => {
  let req = await fetch(`https://api.animex.live/meta/anilist/trending?page=1&perPage=28`);
  let res = await req.json();

  return res;
};

async function Animes() {
  const data = await getTrending();
  return <div className="grid grid-cols-6 gap-2">


    {data.results.map((a:any,i:number)  => (
        <Link href={`/anime/${a.malId}`} key={i}>

            <img src={a.image} />
            <h1>
                {a.title.romaji}
            </h1>
        </Link>
   ) )}
  </div>;
}

export default Animes;
