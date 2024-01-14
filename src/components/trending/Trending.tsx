'use client'
import React, { useEffect, useState } from 'react'

export default function Trending() {
const [data,setData] = useState()

    useEffect(() => {
        getTrending()
    },[])
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

  return (
    <div>Trending</div>
  )
}
