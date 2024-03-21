"use client"
import UserTab from '@/components/tabs/UserTab';
import { CookieOptions, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import React, { useEffect, useState } from 'react'
import supabase from '../../../utils/supabase';
import { Button } from '@nextui-org/react';
import { revalidatePath, revalidateTag } from 'next/cache';
import Rev from './Rev';
import ProfileTab from '@/components/tabs/ProfileTab';
import ListCard from '@/components/card/ListCard';


const headers = {
    authorization:
      `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
    apikey:
      `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
     
  };
  


// const data = async () => {

//     let url = `https://tomeleyakujcqfaovrqr.supabase.co/rest/v1/profiles?select=*&username=eq.ottoh3x
//     `
  
//     let req = await fetch(
//       url,
//       {
//         method: "GET",
//         headers: headers,
//        next: { tags: ['collection'] } 
        
//       }
//     );
//     let res = await req.json();
//     console.log(res)
//     return res[0];
// }


export default  function page() {
  const [data,setData] = useState()
  const [refresh,setRefresh] = useState(false)

  useEffect(() => {
    fetchData()
  },[refresh])

    const fetchData = async () => {

      let url = `https://tomeleyakujcqfaovrqr.supabase.co/rest/v1/profiles?select=*&username=eq.ottoh3x
      `
    
      let req = await fetch(
        url,
        {
          method: "GET",
          headers: headers,
         next: { tags: ['collection'] } 
          
        }
      );
      let res = await req.json();
      setData(res[0])
  }
  return (
    <div>

<div className="overflow-hidden w-full xl:px-16">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-2 mt-4">
                  {data?.favs?.map((anime: any, index: number) => (
                    <div key={index}>
                      <ListCard
                        title={`${anime?.title}`}
                        image_url={anime?.image_url}
                        heading={"UserList"}
                        id={anime?.id}
                        refresh={() => setRefresh(!refresh)}
                      />
                    </div>
                  ))}
                </div>
              </div>
                <UserTab  WatchList={data?.watchlist} Favorites={data?.favs} refresh={() => setRefresh(!refresh)}/>

                <Rev />
    </div>
  )
}
