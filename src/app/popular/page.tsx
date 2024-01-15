import GridContainer from "@/components/container/GridContainer";
import AnimeModal from "@/components/modal/AnimeModal";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: 'Popular Animes',
  description: 'Get Popular Animes',
}

const getTrending = async () => {
  let req = await fetch(
    `https://animexscraper.vercel.app/meta/anilist/popular?page=1&perPage=150`
  );
  let res = await req.json();

  return res;
};

export default async function Popular() {
  const data = await getTrending();
  return (
    <>
    <AnimeModal />
    <GridContainer data={data.results} heading="Trending" />
    </>
  
  );
}
