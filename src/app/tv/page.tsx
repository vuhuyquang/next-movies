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
      <FilmsByCategory title={'Phim bộ đang chiếu'} category={'phim-bo-dang-chieu'} />
      <FilmsByCategory title={'Phim bộ hoàn thành'} category={'phim-bo-hoan-thanh'} />
      <FilmsByCategory title={'TV Show'} category={'tv-shows'} />
    </div>
  );
};

export default TvPage;
