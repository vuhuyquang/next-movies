'use client';
import Link from 'next/link';
import { HomeOutlined, LaptopOutlined, SearchOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { usePathname } from 'next/navigation';

const SidebarLargeScreen = () => {
  const pathname = usePathname();

  return (
    <aside className="lg:w-[70px] lg:bg-black lg:fixed lg:h-full lg:flex lg:flex-col lg:items-center lg:border-r lg:border-[#1f2123] hidden">
      <nav className="flex-1 flex flex-col justify-evenly">
        <Link
          href={'/'}
          className={`block text-center ${pathname === '/' ? 'text-[#40C1AD]' : 'text-gray-300'}`}
        >
          <Tooltip title="Trang chủ">
            <HomeOutlined className={'text-2xl hover:text-gray-300 transition delay-[45ms]'} />
          </Tooltip>
        </Link>
        <Link
          href={'/movie'}
          className={`block text-center ${pathname === '/movie' ? 'text-[#40C1AD]' : 'text-gray-300'}`}
        >
          <Tooltip title="Phim">
            <VideoCameraOutlined className={'text-2xl hover:text-gray-300 transition delay-[45ms]'} />
          </Tooltip>
        </Link>
        <Link
          href={'/tv'}
          className={`block text-center ${pathname === '/tv' ? 'text-[#40C1AD]' : 'text-gray-300'}`}
        >
          <Tooltip title="Chương trình TV">
            <LaptopOutlined className={'text-2xl hover:text-gray-300 transition delay-[45ms]'} />
          </Tooltip>
        </Link>
        <Link
          href={'/search'}
          className={`block text-center ${pathname === '/search' ? 'text-[#40C1AD]' : 'text-gray-300'}`}
        >
          <Tooltip title="Tìm kiếm">
            <SearchOutlined className={'text-2xl hover:text-gray-300 transition delay-[45ms]'} />
          </Tooltip>
        </Link>
      </nav>
    </aside>
  );
};

export default SidebarLargeScreen;
