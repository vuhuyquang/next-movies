import { Metadata } from 'next';
import FilmsByCategory from '@/components/home/films-by-category';
import SearchBanner from '@/components/common/SearchBanner';

export const metadata: Metadata = {
  title: 'Next TV | Xem phim không quảng cáo',
};

const TvPage = () => {
  return (
    <div>
      <SearchBanner />
      <FilmsByCategory title={'TV Show'} category={'tv-shows'} />
      <FilmsByCategory title={'Phim Bộ Đang Chiếu'} category={'phim-bo-dang-chieu'} />
      <FilmsByCategory title={'Phim Bộ Hoàn Thành'} category={'phim-bo-hoan-thanh'} />
    </div>
  );
};

export default TvPage;
