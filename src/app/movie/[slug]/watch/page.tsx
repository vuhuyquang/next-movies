'use client';

import { useEffect, useState } from 'react';
import MovieDetail from '@/components/movie/Detail';
import { Episodes, Movie } from '@/types/movie';
import { useParams, useSearchParams } from 'next/navigation';
import { getFilmDetails } from '@/services/filmService';
type infoFilm = {
  episodes: Episodes;
  movie: Movie;
};

export default function WatchPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { slug } = params;
  const [loading, setLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState('');
  const [ep, setEp] = useState(searchParams.get('ep') || 1);
  const [infoFilm, setInfoFilm] = useState<infoFilm>({ episodes: undefined, movie: undefined });

  const getDetail = async (slug: string) => {
    try {
      const response = await getFilmDetails(slug);
      if (response?.data.status) {
        const data = {
          episodes: response.data.episodes,
          movie: response.data.movie,
        };
        setInfoFilm(data);
        setVideoSrc(data.episodes[0].server_data[Number(ep) - 1]?.link_embed ?? '');
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

  useEffect(() => {
    setEp(ep || '1');
    if (infoFilm && infoFilm.episodes) {
      setVideoSrc(infoFilm.episodes[0].server_data[Number(ep) - 1]?.link_embed ?? '');
    }
  }, [ep]);

  return (
    <div>
      <div className="overflow-x-hidden">
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#111111]">
          {loading && <div className="text-white">Loading...</div>}
          {!loading && (
            <iframe
              src={videoSrc}
              className="w-[90vw] h-[90vh] border-0"
              allowFullScreen
              allow={'autoplay'}
            />
          )}
        </div>
      </div>
      <div className="bg-[#111111] w-full">{!loading && <MovieDetail infoFilm={infoFilm} />}</div>
    </div>
  );
}
