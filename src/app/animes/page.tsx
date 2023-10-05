import Card from "@/components/card/Card";
import GridContainer from "@/components/container/GridContainer";
import Tabs from "@/components/tabs/Tabs";
import Link from "next/link";
import React from "react";

// const getTrending = async () => {
//   let req = await fetch(
//     `https://api.animex.live/meta/anilist/trending?page=1&perPage=28`
//   );
//   let res = await req.json();

//   return res;
// };

const getTrending = async () => {
  let req = await fetch(
    `https://eu2-cheerful-tadpole-32531.upstash.io/get/trending`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REDIS_BEARER_TOKEN}`,
      },
    }
  );
  let res = await req.json();

  return JSON.parse(res.result);
};

const fetchLatest = async () => {
  let req = await fetch(
    `https://eu2-cheerful-tadpole-32531.upstash.io/get/latest`,
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${process.env.REDIS_BEARER_TOKEN}`,
      },
    }
  );
  let res = await req.json();

  return JSON.parse(res.result);
};
// const fetchLatest = async () => {
//   let req = await fetch(`https://api.animex.live/anime/gogoanime/recent-episodes`,{cache:"no-store"})

// let res = await req.json();

//   return res.results;

// }

async function Animes() {
  const data = await getTrending();
  // const redis = await fetchRedis()
  const latest = await fetchLatest();

  return (
    <div>
      <Tabs Trending={data} Latest={latest} MyList={[]} />
    </div>
  );
}

export default Animes;
