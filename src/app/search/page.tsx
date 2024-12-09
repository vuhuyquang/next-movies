'use client';
import React, { useState } from 'react';
// import { FaFilter, FaSearch } from "react-icons/fa";

const SearchPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const genres = [
    { value: 'hanh-dong', label: 'Hành động' },
    { value: 'tinh-cam', label: 'Tình cảm' },
    { value: 'hai-huoc', label: 'Hài hước' },
    { value: 'co-trang', label: 'Cổ trang' },
    { value: 'tam-ly', label: 'Tâm lý' },
    { value: 'hinh-su', label: 'Hình Sự' },
    { value: 'chien-tranh', label: 'Chiến tranh' },
    { value: 'the-thao', label: 'Thể thao' },
    { value: 'vo-thuat', label: 'Võ thuật' },
    { value: 'vien-tuong', label: 'Viễn tưởng' },
    { value: 'phieu-luu', label: 'Phiêu lưu' },
    { value: 'khoa-hoc', label: 'Khoa học' },
    { value: 'kinh-di', label: 'Kinh dị' },
    { value: 'am-nhac', label: 'Âm nhạc' },
    { value: 'than-thoai', label: 'Thần thoại' },
    { value: 'tai-lieu', label: 'Tài liệu' },
    { value: 'gia-dinh', label: 'Gia đình' },
    { value: 'chinh-kich', label: 'Chính kịch' },
    { value: 'bi-an', label: 'Bí ẩn' },
    { value: 'hoc-duong', label: 'Học đường' },
    { value: 'kinh-dien', label: 'Kinh điển' },
    { value: 'phim-18', label: 'Phim 18+' },
  ];

  const countries = [
    { value: 'trung-quoc', label: 'Trung Quốc' },
    { value: 'han-quoc', label: 'Hàn Quốc' },
    { value: 'nhat-ban', label: 'Nhật Bản' },
    { value: 'thai-lan', label: 'Thái Lan' },
    { value: 'au-my', label: 'Âu Mỹ' },
    { value: 'dai-loan', label: 'Đài Loan' },
    { value: 'hong-kong', label: 'Hồng Kông' },
    { value: 'an-do', label: 'Ấn Độ' },
    { value: 'anh', label: 'Anh' },
    { value: 'phap', label: 'Pháp' },
    { value: 'canada', label: 'Canada' },
    { value: 'quoc-gia-khac', label: 'Quốc Gia Khác' },
    { value: 'duc', label: 'Đức' },
    { value: 'tay-ban-nha', label: 'Tây Ban Nha' },
    { value: 'tho-nhi-ky', label: 'Thổ Nhĩ Kỳ' },
    { value: 'ha-lan', label: 'Hà Lan' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'nga', label: 'Nga' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'ba-lan', label: 'Ba Lan' },
    { value: 'uc', label: 'Úc' },
    { value: 'thuy-dien', label: 'Thụy Điển' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'philippines', label: 'Philippines' },
    { value: 'bo-dao-nha', label: 'Bồ Đào Nha' },
    { value: 'y', label: 'Ý' },
    { value: 'dan-mach', label: 'Đan Mạch' },
    { value: 'uae', label: 'UAE' },
    { value: 'na-uy', label: 'Na Uy' },
    { value: 'thuy-si', label: 'Thụy Sĩ' },
    { value: 'chau-phi', label: 'Châu Phi' },
    { value: 'nam-phi', label: 'Nam Phi' },
    { value: 'ukraina', label: 'Ukraina' },
    { value: 'a-rap-xe-ut', label: 'Ả Rập Xê Út' },
    { value: 'bi', label: 'Bỉ' },
    { value: 'ireland', label: 'Ireland' },
    { value: 'colombia', label: 'Colombia' },
    { value: 'phan-lan', label: 'Phần Lan' },
    { value: 'viet-nam', label: 'Việt Nam' },
    { value: 'chile', label: 'Chile' },
    { value: 'hy-lap', label: 'Hy Lạp' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'singapore', label: 'Singapore' },
  ];
  const sortOptions = [
    { value: 'year', label: 'Năm phát hành' },
    { value: 'updated', label: 'Cập nhật lần cuối' },
    { value: 'posted', label: 'Ngày đăng' },
  ];

  const contentTypes = [
    { value: 'phim-bo', label: 'Phim bộ' },
    { value: 'phim-lẻ', label: 'Phim lẻ' },
    { value: 'hoat-hinh', label: 'Hoạt hình' },
    { value: 'tv-shows', label: 'TV Shows' },
    { value: 'phim-vietsub', label: 'Phim vietsub' },
    { value: 'phim-thuyet-minh', label: 'Phim thuyết minh' },
    { value: 'phim-long-tieng', label: 'Phim lồng tiếng' },
    { value: 'phim-bo-dang-chieu', label: 'Phim bộ đang chiếu' },
    { value: 'phim-bo-hoan-thanh', label: 'Phim bộ hoàn thành' },
    { value: 'phim-sap-chieu', label: 'Phim sắp chiếu' },
    { value: 'subteam', label: 'Subteam' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);
    console.log('Selected filters:', values);
  };

  return (
    <div className="min-h-screen bg-[#111111] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="flex items-center bg-[#1f2021] rounded-lg p-2">
            {/* <FaSearch className="text-gray-400 ml-2" /> */}
            <input
              type="text"
              placeholder="Tìm kiếm phim, TV shows..."
              className="w-full bg-[#1f2021] border-none text-white px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="mb-4 flex items-center text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {/* <FaFilter className="mr-2" /> */}
          Bộ lọc nâng cao
        </button>

        {isFilterOpen && (
          <div className="bg-[#1f2021] rounded-lg shadow-xl p-6 mb-8 transition-all">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Sắp xếp theo</label>
                  <select
                    name="sort"
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
                  <label className="block text-sm font-medium text-gray-300">Thể loại</label>
                  <select
                    name="sort"
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
                  <label className="block text-sm font-medium text-gray-300">Quốc gia</label>
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
                  <label className="block text-sm font-medium text-gray-300">Danh mục</label>
                  <select
                    name="contentType"
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
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="reset"
                  className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md bg-gray-700 transition-colors"
                >
                  Đặt lại
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
