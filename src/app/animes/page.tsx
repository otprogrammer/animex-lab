import Card from "@/components/card/Card";
import Link from "next/link";
import React from "react";

const getTrending = async () => {
  let req = await fetch(
    `https://api.animex.live/meta/anilist/trending?page=1&perPage=28`
  );
  let res = await req.json();

  return res;
};

async function Animes() {
  const data = await getTrending();
  return (
    <div>


    <div className="mx-20 flex flex-wrap gap-3">
      {data.results.map((a: any, i: number) => (
        <Card {...a}  key={i} />
      ))}
    </div>

    
    </div>
  );
}

export default Animes;
