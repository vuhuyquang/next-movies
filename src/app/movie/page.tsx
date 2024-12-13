import { Metadata } from 'next';
import FilmsByCategory from '@/components/home/films-by-category';
import SearchBanner from '@/components/common/SearchBanner';

export const metadata: Metadata = {
  title: 'Next Movies | Xem phim không quảng cáo',
};
export default function MovieListPage() {
  return (
    <div>
      <SearchBanner />
      <FilmsByCategory title={'Phim Mới Cập Nhật'} category={'phim-moi-cap-nhat'} />
      <FilmsByCategory title={'Hoạt Hình'} category={'hoat-hinh'} />
      <FilmsByCategory title={'Phim Thuyết Minh'} category={'phim-thuyet-minh'} />
    </div>
  );
}
