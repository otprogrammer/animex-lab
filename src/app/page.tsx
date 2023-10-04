import Card from "@/components/card/Card";
import GridContainer from "@/components/container/GridContainer";
import Tabs from "@/components/tabs/Tabs";
import Link from "next/link";
import React from "react";


const getTrending = async () => {
  let req = await fetch(`https://eu2-cheerful-tadpole-32531.upstash.io/get/trending`, {
headers: {
Authorization: `Bearer ${process.env.REDIS_BEARER_TOKEN}`
}
})
let res = await req.json();

  return JSON.parse(res.result);

}

// const fetchRedis = async () => {
//   let req = await fetch(`https://eu2-cheerful-tadpole-32531.upstash.io/get/death-note`, {
// headers: {
// Authorization: "Bearer An8TACQgM2ZmNTUwOWEtM2I5Yy00ZWE0LWE2NWItMmNiNjFiYTFjYzI1DNPhw9vdt05fBhjPq1sklWtBNW5UapmmuUwqhABRhl4="
// }
// })
// let res = await req.json();

//   return res;

// }

const fetchLatest = async () => {
  let req = await fetch(`https://eu2-cheerful-tadpole-32531.upstash.io/get/latest`, {
    cache:"no-store",
headers: {
Authorization: `Bearer ${process.env.REDIS_BEARER_TOKEN}`
}
})
let res = await req.json();

  return JSON.parse(res.result);

}


async function Home() {
  const data = await getTrending();
  const latest = await fetchLatest()


  return (
    <div>

      
    <Tabs Trending={data} Latest={latest} MyList={[]}/>

    

    
    </div>
  );
}

export default Home;
