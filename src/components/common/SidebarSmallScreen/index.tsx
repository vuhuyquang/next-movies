'use client';
import Link from 'next/link';
import { HomeOutlined, LaptopOutlined, SearchOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { usePathname } from 'next/navigation';

const SidebarSmallScreen = () => {
  const pathname = usePathname();
  return (
    <aside className="lg:hidden fixed bottom-0 left-0 w-full bg-black text-white border-t border-[#1f2123] flex justify-around items-center py-2">
      <nav className="flex flex-row justify-around w-full px-4">
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

export default SidebarSmallScreen;
