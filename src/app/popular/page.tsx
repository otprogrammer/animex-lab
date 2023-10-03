import GridContainer from '@/components/container/GridContainer';
import React from 'react'



const getTrending = async () => {
  let req = await fetch(
    `https://api.animex.live/meta/anilist/popular?page=1&perPage=150`
  );
  let res = await req.json();

  return res;
};


export default async function Popular() {
  const data = await getTrending()
  return <GridContainer data={data.results} heading='Trending' />

}
