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
    source:string;
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
    slug?: string[];
    episodesList: string[];
    animeData: AnimeInfo;
    gogoId:string;
  };
  
  export type ADProps = {
    title: string;
    data:any;
  };


  export type EpisodesProps = {
    episodesList: AnimeEpisodesProps[];
    handleEpisodeRoute: (epId:any,epNumber: number) => void;
    animeImg:string;
  };
  
  export type AnimeEpisodesProps = {
    id: string;
    image: string;
    title: string;
    number: number;
    air_date: string;
    description: string;
  };
  

  type Paginated<D> = {
    data: D,
    meta: {
        total: number;
        lastPage: number;
        currentPage: number;
        perPage: number;
        prev: number | null;
        next: number | null;
    }
}

export type RecentRelease = Paginated<Episode[]>

export type SearchResult = Paginated<Anime[]>

export type Anime = {
    id: string,
    slug: string,
    description: string | undefined,
    title: {
        english: string,
        native: string,
        romaji: string,
        userPreferred: string
    },
    status: "RELEASING" | "FINISHED" | "NOT_YET_AIRED" | "HIATUS",
    coverImage: string,
    bannerImage: string,
    currentEpisode: number,
    episodes: Episode[],
    mappings: {
        mal?: number,
        anidb?: number,
        kitsu?: number,
        anilist?: number
    }
}

export type Episode = {
    id: string,
    number: number,
    anime: Anime,
    title: string | undefined,
    createdAt: string,
    airedAt: Date,
    description: string | undefined,
    image: string | undefined,
    sources: Source[],
    episodes: Episode[]
}

export type Source = {
    id: string,
    website: string,
    subtitle?: string,
    url: string,
    priority: number
}

export type AniSkip = {
    statusCode: number,
    results?: AniSkipResult[]
}

export type AniSkipResult = {
    interval: {
        startTime: number,
        endTime: number
    },
    type: string
}


export type GogoAnimeData = {
  id: string;
  title: string;
  url: string;
  genres: string[];
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: string;
  type: string;
  status: string;
  otherName: string;
  episodes: any[]; // You might want to define a type for episodes as well
};


export type GridContainerProps = {
  data:any[];
  heading:string;
  swiperId?:number;
}