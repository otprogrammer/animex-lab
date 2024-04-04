// import { NextRequest, NextResponse } from "next/server";
// import supabase from "../../../../utils/supabase";

// export async function GET(request: NextRequest, {params}: any) {
//         const animeData :any = []
//     try {
    
//         try {
//           const r = await fetch('https://ottoapi.vercel.app/meta/anilist/trending?perPage=5');
//           const s = await r.json();
//           console.log(s)
      
//           const d = await Promise.all(
//             s.results.map(async (e) => {
//               const k :any = await fetch(`http://localhost:3000/api/anime/${e.malId}`)
//               console.log(e.malId)
//               // const b = await fetch(`/api/anime/${e.malId}`);
//               // const k = await b.json();
//               if (k[0]?.tmdb_id) {
//                 const y = await fetch(`https://api.themoviedb.org/3/tv/${k[0]?.tmdb_id}/images?api_key=cfe422613b250f702980a3bbf9e90716`);
//                 const yes = await y.json();
//                 const { data } :any  = await supabase
//                   .from('anime')
//                   .select(
//                     'title, anime_id, mal_id, tmdb_id, status, year, anilistid, type, poster_path, backdrop_path, score, genres, synopsis, trailer_url'
//                   )
//                   .eq('tmdb_id', k[0].tmdb_id)
//                   .not('title', 'ilike', '%(Dub)%');

                  
//                 data[0]['logo'] = yes.logos[0].file_path;
//                 animeData.push(data[0])
//               }
//             })
//             );

        

      
      
//         //   await supabase.from('trending').update({ trending: animeData }).eq('id', 13);
//             if (animeData) {

//                 return NextResponse.json({ message: "OK", data: animeData }, { status: 200 });
//             }

          
//         } catch (error) {
//           console.error('Error fetching trending data:', error);
//           return NextResponse.json({ message: "Error", error }, { status: 500 });        }
    
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }