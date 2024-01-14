"use client";
import React, { useEffect, useState } from "react";
import GridContainer from "../container/GridContainer";

export default function TrendingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);
  const getTrending = async () => {
    let req = await fetch(
      `https://eu2-cheerful-tadpole-32531.upstash.io/get/trending`,
      {
        headers: {
          Authorization: `Bearer An8TACQgM2ZmNTUwOWEtM2I5Yy00ZWE0LWE2NWItMmNiNjFiYTFjYzI1DNPhw9vdt05fBhjPq1sklWtBNW5UapmmuUwqhABRhl4=`,
        },
      }
    );
    let res = await req.json();

    setData(JSON.parse(res.result));
  };

  return <GridContainer data={data} heading={"Trending"} />;
}
