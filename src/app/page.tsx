import { Metadata } from 'next';
import FilmsByCategory from '@/components/home/films-by-category';
import SearchBanner from '@/components/common/SearchBanner';

export const metadata: Metadata = {
  title: 'Next Movies | Xem phim không quảng cáo',
};

const HomePage = () => {
  return (
    <div>
      <SearchBanner />
      <FilmsByCategory title={'Phim mới cập nhật'} category={'phim-moi-cap-nhat'} />
      <FilmsByCategory title={'Phim bộ đang chiếu'} category={'phim-bo-dang-chieu'} />
      <FilmsByCategory title={'Phim sắp ra mắt'} category={'phim-sap-chieu'} />
    </div>
  );
};

export default HomePage;
