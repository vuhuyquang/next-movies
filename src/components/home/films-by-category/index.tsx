'use client';
import { getFilmsByCategory } from '@/services/filmService';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { convertToStars } from '@/helpers';

type FilmsByCategoryProps = {
  title: string;
  category: string;
};

const DEFAULT_TITLE = 'Danh sách phim';

const FilmsByCategory = (props: FilmsByCategoryProps) => {
  const { title, category } = { ...props };
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFilms = async () => {
    try {
      const response = await getFilmsByCategory(category);

      if (response.data.status && response.data) {
        setFilms(response.data.data.items);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching films:', error);
    }
  };

  useEffect(() => {
    (async () => await fetchFilms())();
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-white text-2xl pt-3 px-10 font-normal">{title || DEFAULT_TITLE}</h2>
      {loading && (
        <div className="flex flex-row gap-2 overflow-x-auto py-3 px-10 will-change-transform scroll-smooth mb-6">
          {Array.from({ length: 24 }, (_, index) => (
            <div key={index} className="min-w-[240px] min-h-[384px] max-w-[250px] max-h-[394px] bg-[#000]" />
          ))}
        </div>
      )}
      {!loading && (
        <div className="flex flex-row gap-2 cursor-pointer overflow-x-auto py-3 px-10 will-change-transform scroll-smooth animate-slide-up mb-6">
          {films &&
            films.length > 0 &&
            films.map((film) => (
              <Link key={film.slug} href={`movie/${film.slug}`}>
                <Image
                  width="240"
                  height="384"
                  src={`https://img.ophim.live/uploads/movies/${film.thumb_url}`}
                  alt={film.slug}
                  className="animate-pulse opacity-0 border-solid border-4 border-[#1F2021] sm:w-[160px] sm:h-[256px] md:w-[250px] md:h-[394px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                  loading="lazy"
                  onLoad={(imageElement) => {
                    imageElement.currentTarget.classList.remove('opacity-0', 'animate-pulse');
                    imageElement.currentTarget.classList.add('opacity-100');
                  }}
                />
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[18px] font-normal">{film.name}</span>
                  <div className="flex items-center text-base text-[#06aca3]">
                    {Array.from({ length: convertToStars(film.tmdb.vote_average) }, (_, index) => (
                      <StarFilled key={index} />
                    ))}
                    {Array.from({ length: 5 - convertToStars(film.tmdb.vote_average) }, (_, index) => (
                      <StarOutlined key={index} />
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default FilmsByCategory;
