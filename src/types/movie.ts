export interface Episodes {
  server_data: any[];
  server_name: string;
}

export interface Movie {
  vote_count: any;
  actor: string[];
  category: { name: string }[];
  chieurap: boolean;
  content: string;
  country: any[];
  created: any;
  director: string[];
  episode_current: string;
  episode_total: string;
  imdb: {
    box_office?: string;
    budget?: string;
  };
  is_copyright: boolean;
  lang: string;
  modified: any;
  name: string;
  notify: string;
  origin_name: string;
  poster_url: string;
  quality: string;
  showtimes: string;
  slug: string;
  status: string;
  sub_docquyen: boolean;
  thumb_url: string;
  time: string;
  tmdb: any;
  trailer_url: string;
  type: string;
  view: number;
  year: number;
  _id: string;
}
