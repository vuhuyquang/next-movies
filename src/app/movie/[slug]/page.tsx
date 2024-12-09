'use client';
import { useEffect, useState } from 'react';
import BannerDetailMovie from '@/components/common/BannerDetailMovie';
import MovieDetail from '@/components/movie/Detail';
import { Episodes, Movie } from '@/types/movie';
import { useParams } from 'next/navigation';
import { getFilmDetails } from '@/services/filmService';

type infoFilm = {
  episodes: Episodes;
  movie: Movie;
};

export default function MoviePage() {
  const params = useParams();
  const { slug } = params;
  const [infoFilm, setInfoFilm] = useState<infoFilm>({ episodes: undefined, movie: undefined });
  const [loading, setLoading] = useState(true);

  const getDetail = async (slug: string) => {
    try {
      const response = await getFilmDetails(slug);

      if (response?.data.status) {
        setInfoFilm({
          episodes: response.data.episodes,
          movie: response.data.movie,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getDetail(typeof slug === 'string' ? slug : slug[0]);
    })();
  }, []);

  return (
    <div>
      {!loading && (
        <>
          <BannerDetailMovie infoFilm={infoFilm} />
          <MovieDetail infoFilm={infoFilm} />
        </>
      )}
    </div>
  );
}
