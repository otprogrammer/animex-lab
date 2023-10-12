import GridContainer from '@/components/container/GridContainer';
import GenresTab from '@/components/tabs/GenresTab';
import type  { Metadata } from 'next';
import React from 'react'




export const metadata: Metadata = {
  title: 'Anime Genres',
  description: 'Get Anime Genres',
}

const headers = {
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxcGZia3lzcmNtZnJ0bWN2bW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MTk1NDUsImV4cCI6MjAxMDE5NTU0NX0.Ixp1I4vhkZICLtI59NKYxCibfMxmkHlI-U_JY6pDWT4',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxcGZia3lzcmNtZnJ0bWN2bW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MTk1NDUsImV4cCI6MjAxMDE5NTU0NX0.Ixp1I4vhkZICLtI59NKYxCibfMxmkHlI-U_JY6pDWT4'
};




const getGenres = async () => {
    let req = await fetch('https://rqpfbkysrcmfrtmcvmop.supabase.co/rest/v1/genres?select=*', {
        method: 'GET',
        headers: headers,
   
    })

    let res = await req.json();
  
    return res;
  };


export default async function Genres() {
    const data = await getGenres()



    
  return (
    <div>

        <GenresTab data={data?.[0]?.data}/>
    </div>
  )
}
