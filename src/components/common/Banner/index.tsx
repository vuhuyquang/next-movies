'use client';
import './index.scss';

import { PlayCircleOutlined, StarFilled, StarOutlined } from '@ant-design/icons';

const Banner = () => {
  return (
    <div className="relative aspect-[3/2] lg:aspect-[25/9] bg-black">
      <div className="absolute inset-0 lg:left-1/3">
        <img
          src="https://movies-proxy.vercel.app/ipx/f_webp&s_1220x659/tmdb/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
          alt="Hình nền"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 px-24 flex flex-col justify-center lg:px-25 lg:w-2/3 lg:bg-gradient-to-r shadow-gradient">
        <div className="text-white animate-slide-up">
          <h1 className="text-4xl lg:text-5xl line-clamp-2 font-medium">Deadpool & Wolverine</h1>
          <div className="flex flex-row flex-wrap gap-2 items-center mt-4 text-sm">
            <div className="flex items-center">
              <StarFilled className="text-[#40c1ad] text-[18px]" />
              <StarFilled className="text-[#40c1ad] text-[18px]" />
              <StarFilled className="text-[#40c1ad] text-[18px]" />
              <StarFilled className="text-[#40c1ad] text-[18px]" />
              <StarOutlined className="text-[#40c1ad] text-[18px]" />
            </div>
            <div className="opacity-50 hidden md:block">7.8</div>
            <span className="opacity-50 hidden md:block">·</span>
            <div className="opacity-50 hidden md:block">1.9K Đánh giá</div>
            <span className="opacity-50">·</span>
            <div className="opacity-50">2024</div>
            <span className="opacity-50">·</span>
            <div className="opacity-50">128 phút</div>
          </div>
          <p className="hidden md:block mt-2 opacity-80 leading-relaxed line-clamp-3 md:line-clamp-5 text-xs md:text-base">
            Wade Wilson, một nhân vật mệt mỏi trong cuộc sống dân sự, đã bỏ lại những ngày tháng là tên lính
            đánh thuê Deadpool. Nhưng khi thế giới của anh đối mặt với một mối đe dọa nghiêm trọng, Wade buộc
            phải trở lại với bộ đồ chiến đấu, lần này cùng với Wolverine, người cũng không mấy vui vẻ.
          </p>
          <div className="py-2 hidden lg:block">
            <button
              type="button"
              className="flex gap-2 items-center px-8 py-3 bg-[#9ca3af33] hover:bg-gray-300 text-white hover:text-black transition rounded border-none text-lg"
              title="Xem Trailer"
            >
              <PlayCircleOutlined className="text-xl" /> Xem Ngay
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

export default Banner;
