import Card from "@/components/card/Card";
import GridContainer from "@/components/container/GridContainer";
import Tabs from "@/components/tabs/Tabs";
import Link from "next/link";
import React from "react";

const getTrending = async () => {
  let req = await fetch(
    `https://api.animex.live/meta/anilist/trending?page=1&perPage=28`
  );
  let res = await req.json();

  return res;
};


const fetchRedis = async () => {
  let req = await fetch(`https://eu2-cheerful-tadpole-32531.upstash.io/get/death-note`, {
headers: {
Authorization: "Bearer An8TACQgM2ZmNTUwOWEtM2I5Yy00ZWE0LWE2NWItMmNiNjFiYTFjYzI1DNPhw9vdt05fBhjPq1sklWtBNW5UapmmuUwqhABRhl4="
}
})
let res = await req.json();

  return res;

}

const fetchLatest = async () => {
  let req = await fetch(`https://api.animex.live/anime/gogoanime/recent-episodes`)

let res = await req.json();

  return res.results;

}


async function Animes() {
  const data = await getTrending();
  const redis = await fetchRedis()
  const latest = await fetchLatest()


  return (
    <div>

      
    <Tabs Popular={data.results} Latest={latest} MyList={[]}/>

    

    
    </div>
  );
}

export default Animes;
