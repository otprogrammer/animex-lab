import Link from 'next/link'
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

    <div className='text-white'>
        
        <div className='w-[200px] min-w-[130px]'>

        <img className='rounded-sm' src={getAnime[0].coverimage} alt={getAnime[0].title}/>
        </div>
        <h1>
        {getAnime[0].title}
        </h1>
        <p>{getAnime[0].synopsis}</p>
        

        <Link href={`/w/${getAnime[0].anime_id}/1`}>
        Watch</Link>
        </div>
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