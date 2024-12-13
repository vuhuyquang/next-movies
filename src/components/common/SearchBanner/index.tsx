'use client';
import './index.scss';

import { PlayCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBanner = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  return (
    <div className="relative aspect-[3/2] lg:aspect-[25/9] bg-black">
      <div className="absolute inset-0 lg:left-1/3">
        <img src="/images/banner.webp" alt="Banner tìm kiếm phim" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 px-24 flex flex-col justify-center lg:px-25 lg:w-2/3 lg:bg-gradient-to-r shadow-gradient">
        <div className="text-white animate-slide-up">
          <h1 className="text-4xl lg:text-5xl font-semibold">Xem phim không quảng cáo</h1>
          <div className="opacity-50 hidden md:block">
            Thưởng thức các bộ phim và chương trình truyền hình mà bạn yêu thích
          </div>
          <div className="py-2 hidden lg:flex">
            <input
              value={keyword}
              type="text"
              placeholder="Nhập tên phim, TV shows..."
              className="w-[25rem] bg-[#1f2021] border-none text-xl px-4 py-3 focus:outline-none text-white"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              type="button"
              className="bg-[#40C1AD] flex items-center px-4 py-3 text-xl cursor-pointer text-white outline-0 border-0 hover:opacity-90 transition duration-300 ease-in-out"
              onClick={() => {
                router.push(`/search?keyword=${keyword.trim()}`);
              }}
            >
              <SearchOutlined />
              <span>Tìm kiếm</span>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden absolute left-0 top-0 right-0 h-2/3 flex items-center justify-center">
        <button
          type="button"
          className="flex items-center px-10 text-5xl opacity-20 hover:opacity-80 transition"
        >
          <PlayCircleOutlined className="text-5xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBanner;
