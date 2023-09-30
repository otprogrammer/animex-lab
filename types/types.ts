export type AnimeInfo = {
    anime_id: string;
    title: string;
    title_english: string;
    title_japanese: string;
    image_url: string;
    mal_id: string;
    external_ids: Record<string, any>;
    enime_id: string;
    slug: string;
    anilistid: string;
    year: string;
    countryoforigin: string;
    coverimage: string;
    bannerimage: string;
    thetvdb: string;
    anidb: string;
    kitsu: string;
    notifymoe: any; // Change this to a specific type if possible
    anisearch: string;
    animeplanet: any; // Change this to a specific type if possible
    season: string;
    genres: string[];
    status: string;
    type: string;
    trailer_url: string;
    airing: boolean;
    duration: string;
    aired: {
      from: string;
      to: string;
      prop: {
        from: {
          day: number;
          month: number;
          year: number;
        };
        to: {
          day: number;
          month: number;
          year: number;
        };
      };
      string: string;
    };
    rating: string;
    rank: number;
    popularity: string;
    members: string;
    favorites: string;
    score: string;
    synopsis: string;
    premiered: string;
    broadcast: string;
    studios: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
    opening_themes: string[];
    ending_themes: string[];
    episodes: string;
    episodeslist: any[]; // Change this to a specific type if possible
    characters: any; // Change this to a specific type if possible
    recommendations: any; // Change this to a specific type if possible
    updated_at: string;
    poster_path: string;
    backdrop_path: string;
    tmdb_id: string;
    subType: any; // Change this to a specific type if possible
  };


  export type WatchProps = {
    slug: string[];
    episodesList: string[];
    animeData: AnimeInfo;
  };
  
  export type ADProps = {
    title: string;
    data:any;
  };