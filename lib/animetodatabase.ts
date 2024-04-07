import supabase from "../utils/supabase";

export const saveAnimeToDb = async (userid,anime) => {
    await supabase.rpc("append_favs", {
      user_id: userid,
      data: anime,
    });
  };


  export const addEpisodeToDatabase = async ({userid,episodeId,animeId,imageUrl,title,episode,duration,year}) => {

    await supabase.rpc("update_watchlist", {
      user_id: userid,
      data: {
        id: episodeId,
        anime_id: animeId,
        image_url:imageUrl,
        
        title: title,
        episode: episode,
        time: Date.now(),
        duration: duration || null,
        released: year,
      },
    });
  };