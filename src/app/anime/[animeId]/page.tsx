import React from 'react'

const fetchAnime = async (animeId : any) => {
  let req = await fetch(`https://ottoex.vercel.app/api/a/${animeId}`)
  let res = await req.json()
  return res
}

type PageProps = {
  params : {
    animeId:any;
  }
}

async function Anime({params : {animeId}}:PageProps) {
  const getAnime = await fetchAnime(animeId)

  return (
    <div className='text-white'>{getAnime[0].title}</div>
  )
}

export default Anime

// export async function generateStaticParams() {

//   let req = await fetch(`https://ottodb.vercel.app/api/popular/1`)
//   let res = await req.json()

//   return res.map((a:any) => ({
//     animeId: a.url.toString(),
//   })) 

// }