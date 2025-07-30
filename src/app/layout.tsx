import { Provider } from 'jotai';
import type { Metadata } from 'next';
import { Gowun_Dodum } from 'next/font/google';

import { GlobalErrorModal } from '@/components/error/GloabalErrorModal/GlobalErrorModal';
import { AuthProvider } from '@/components/providers/AuthProvider/AuthProvider';
import { QueryProvider } from '@/components/providers/QueryProvider/QueryProvider';
import 'swiper/css';
import './globals.css';

const gowunDodum = Gowun_Dodum({
  variable: '--font-gowun-dodum',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '서랍',
  description: '오늘 읽은 그 책, 다시 꺼내볼 수 있게 기록해요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${gowunDodum.variable} antialiased`}>
        <Provider>
          <QueryProvider>
            <AuthProvider>
              {children}
              <GlobalErrorModal />
              <div id="portal" />
            </AuthProvider>
          </QueryProvider>
        </Provider>
      </body>
    </html>
  );
}
