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
  title: '도토리서랍 - 독서 기록 서비스',
  description: '책 속 문장을 기록하고 관리하세요. 도토리서랍에 차곡차곡 쌓아둔 문장을 언제든 다시 꺼내보세요.',
  keywords: ['독서 기록', '책 기록', '문장 저장', '독서 노트', '책 관리', '독서 앱', '도토리서랍'],
  verification: {
    google: '_xcG5AVmYYfVWAq1JwC02kz3SsnE9h81XyF_bdNq3-k',
    other: {
      'naver-site-verification': '84153e1c17deb742f1825533ec67e2c6de204c0c',
    },
  },
  alternates: {
    canonical: 'https://www.dotoribook.site',
  },
  metadataBase: new URL('https://www.dotoribook.site'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.dotoribook.site',
    siteName: '도토리서랍',
    title: '도토리서랍 - 독서 기록 서비스',
    description: '책 속 문장을 기록하고 관리하세요. 도토리서랍에 차곡차곡 쌓아둔 문장을 언제든 다시 꺼내보세요.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '도토리서랍 - 독서 기록 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '도토리서랍 - 독서 기록 서비스',
    description: '오늘 읽은 그 책, 다시 꺼내볼 수 있게 기록해요.',
    images: ['/images/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
