'use client';
import React, { useState } from 'react';
import { genres, countries, sortOptions, contentTypes } from '@/configs/search';
import { SearchOutlined } from '@ant-design/icons';
import { searchFilmByFilters } from '@/services/filmService';
import Image from 'next/image';
import Link from 'next/link';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { convertToStars } from '@/helpers';

const SearchPage = () => {
  const [films, setFilms] = useState([]);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i).reverse();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const values = Object.fromEntries(formData);

      const params: {
        sort_field: string;
        category: string;
        country: string;
        slug: string;
        year: string;
      } = {
        sort_field: String(formData.get('sort_field')),
        category: String(formData.get('category')),
        country: String(formData.get('country')),
        slug: String(formData.get('slug')),
        year: String(formData.get('year')),
      };

      const response = await searchFilmByFilters(params);
      if (response.data.status && response.data) {
        setFilms(response.data.data.items);
      }
    } catch (error) {
      console.error('Error fetching films:', error);
    }
  }

  return (
    <div className="bg-[#111111] p-6">
      <div className="bg-[#1f2021] rounded-lg shadow-xl p-6 mb-4 transition-all">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <div className="space-y-2 text-md">
              <label className="block text-md font-medium text-gray-300">Sắp xếp theo</label>
              <select
                name="sort_field"
                className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Chọn tiêu chí sắp xếp</option>
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-md font-medium text-gray-300">Thể loại</label>
              <select
                name="category"
                className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Chọn thể loại</option>
                {genres.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-md font-medium text-gray-300">Quốc gia</label>
              <select
                name="country"
                className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Chọn quốc gia</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-md font-medium text-gray-300">Danh mục</label>
              <select
                name="slug"
                className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Chọn danh mục</option>
                {contentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-md font-medium text-gray-300">Năm sản xuất</label>
              <select
                name="year"
                className="w-full p-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Chọn năm sản xuất</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="reset"
              className="bg-gray-600 flex items-center px-6 py-2 text-md cursor-pointer text-white outline-0 border-0 hover:opacity-90 transition duration-300 ease-in-out rounded"
            >
              <span>Đặt lại</span>
            </button>
            <button
              type="submit"
              className="bg-[#40C1AD] flex items-center px-6 py-2 text-md cursor-pointer text-white outline-0 border-0 hover:opacity-90 transition duration-300 ease-in-out rounded"
            >
              <SearchOutlined />
              <span>Tìm kiếm</span>
            </button>
          </div>
        </form>
      </div>
      <div className="text-white">
        <span className="text-2xl">Kết quả tìm kiếm: {films.length} kết quả</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-10 my-4">
          {films &&
            films.length > 0 &&
            films.map((film) => (
              <Link key={film.slug} href={`movie/${film.slug}`}>
                <Image
                  src={`https://img.ophim.live/uploads/movies/${film.thumb_url}`}
                  alt={film.slug}
                  layout="responsive"
                  width={281.53} // Đặt giá trị width gốc
                  height={450.44} // Đặt giá trị height gốc
                  className="opacity-0 border-solid border-4 border-[#1F2021]
    md:w-[162.93px] xl:h-[260.68px]
    lg:w-[287.29px] xl:h-[459.67px]
    xl:w-[270.47px] xl:h-[432.75px]
    2xl:w-[281.53px] 2xl:h-[450.44px]
    duration-300 hover:scale-105"
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
      </div>
    </div>
  );
};

export default SearchPage;
