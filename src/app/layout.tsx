'use client';

import { FC, ReactNode, useEffect } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { AppProvider } from '@/core';
import '@/assets/styles/app.scss';
import { preventInspect } from '@/helpers';
import SidebarSmallScreen from '@/components/common/SidebarSmallScreen';
import SidebarLargeScreen from '@/components/common/SidebarLargeScreen';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    // preventInspect();
  }, []);
  return (
    <AppProvider>
      <html lang="vi">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Xem phim hot - Xem phim không quảng cáo trên thiết bị của bạn" />
          <title>Xem phim không quảng cáo tại đây nha!</title>
        </head>
        <body suppressHydrationWarning>
          <AntdRegistry>
            <div className="flex flex-col h-screen lg:flex-row">
              <SidebarLargeScreen />

              <div className="flex-1 lg:ml-[70px] overflow-auto bg-[#111]">
                <main>{children}</main>
              </div>

              <SidebarSmallScreen />
            </div>
          </AntdRegistry>
        </body>
      </html>
    </AppProvider>
  );
};

export default RootLayout;
