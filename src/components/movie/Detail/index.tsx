'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Episodes, Movie } from '@/types/movie';
import { stripHtml } from '@/utils/html';

type MovieDetailProps = {
  infoFilm: {
    episodes: Episodes;
    movie: Movie;
  };
};

const MovieDetail = ({ infoFilm }: MovieDetailProps) => {
  const router = useRouter();
  const params = useParams();
  const [selectedTab, setSelectedTab] = useState('overview');
  const selectTab = (tab: string) => {
    setSelectedTab(tab);
  };
  const watchMovie = (index) => {
    router.push(`/movie/${params.slug}/watch?ep=${index + 1}&server=1`);
  };

  return (
    <div className="flex flex-col md:px-4">
      <div className="flex justify-center">
        <ul className="m-0 p-0 flex space-x-4 md:space-x-8 cursor-pointer mt-4 md:mt-8 mb-4 md:mb-10 text-sm md:text-xl list-none">
          <li
            className={`font-normal ${
              selectedTab === 'overview'
                ? 'text-white border-b-2 border-white pb-2' +
                  'transition-transform transform duration-300 delay-[45ms]'
                : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-[45ms]'
            }`}
            onClick={() => selectTab('overview')}
          >
            TỔNG QUAN
          </li>
          <li
            className={`font-normal ${
              selectedTab === 'videos'
                ? 'text-white border-b-2 border-white pb-2' +
                  'transition-transform transform duration-300 delay-[45ms]'
                : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-[45ms]'
            }`}
            onClick={() => selectTab('videos')}
          >
            VIDEOS
          </li>
          <li
            className={`font-normal ${
              selectedTab === 'photos'
                ? 'text-white border-b-2 border-white pb-2' +
                  'transition-transform transform duration-300 delay-[45ms]'
                : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-[45ms]'
            }`}
            onClick={() => selectTab('photos')}
          >
            HÌNH ẢNH
          </li>
        </ul>
      </div>
      {selectedTab === 'overview' ? (
        <div className="px-4 md:px-0 pb-20">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-[28%] p-1 bg-[#1f2021] mb-6 lg:mb-0 h-auto lg:h-[506px]">
              {infoFilm?.movie?.thumb_url && (
                <img
                  className="hidden lg:block w-full object-cover h-full"
                  src={infoFilm?.movie?.thumb_url}
                  alt={infoFilm?.movie?.name}
                />
              )}
            </div>
            <div className="w-full  lg:w-[72%] lg:pl-12 lg:py-2 text-white">
              <div>
                <h2 className="text-[20px] lg:text-[30px] leading-7 lg:leading-9 font-normal">Cốt truyện</h2>
                <p className="opacity-80 leading-[1.5rem] lg:leading-[1.65rem]">
                  {stripHtml(infoFilm?.movie?.content || '')}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row opacity-80 leading-[1.5rem] lg:leading-[1.65rem] text-[12px] lg:text-[14px]">
                <div className="w-full mb-4 lg:mb-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 w-full">
                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Phát hành:</span>
                      <span className="w-1/2">
                        {infoFilm?.movie?.showtimes === '' ? <i>N/A</i> : infoFilm?.movie?.showtimes}
                      </span>
                    </div>

                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Đạo diễn:</span>
                      <span className="w-1/2">
                        {infoFilm?.movie?.director.length === 0 || infoFilm?.movie?.director[0] === '' ? (
                          <i>N/A</i>
                        ) : (
                          infoFilm?.movie?.director.join(', ')
                        )}
                      </span>
                    </div>

                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Doanh thu:</span>
                      <span className="w-1/2">
                        <i>N/A</i>
                      </span>
                    </div>

                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Trạng thái:</span>
                      <span className="w-1/2">{infoFilm?.movie?.status}</span>
                    </div>

                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Sản xuất:</span>
                      <span className="w-1/2">
                        <i>N/A</i>
                      </span>
                    </div>

                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Thời gian:</span>
                      <span className="w-1/2">{infoFilm?.movie?.time || <i>N/A</i>}</span>
                    </div>

                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Ngân sách:</span>
                      <span className="w-1/2">
                        <i>N/A</i>
                      </span>
                    </div>

                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Thể loại:</span>
                      <span className="w-1/2">{infoFilm?.movie?.country.map((c) => c.name).join(', ')}</span>
                    </div>

                    <div className="flex">
                      <span className="font-medium whitespace-nowrap w-1/2">Ngôn ngữ:</span>
                      <span className="w-1/2">{infoFilm?.movie?.lang}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-white">
                <h2 className="text-[20px] lg:text-[30px] leading-7 lg:leading-9 font-normal">
                  Danh sách tập phim
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mt-4">
                  {infoFilm?.episodes &&
                    infoFilm.episodes[0] &&
                    infoFilm.episodes[0].server_data.map((episode, index) => (
                      <div
                        key={index}
                        className="hover:scale-105 border border-gray-600 bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300 text-xs lg:text-sm flex items-center justify-center"
                        onClick={() => watchMovie(index)}
                      >
                        <span className="font-medium">Tập {episode.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default MovieDetail;
