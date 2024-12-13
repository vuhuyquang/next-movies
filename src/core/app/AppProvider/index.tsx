'use client';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/vi_VN';

import store from '@/store/configureStore';

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={locale}>{children}</ConfigProvider>
    </Provider>
  );
};

export default AppProvider;
