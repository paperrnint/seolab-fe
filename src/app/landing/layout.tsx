import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도토리서랍 - 독서 기록 서비스',
  description: '책 속 문장을 기록하고 관리하세요. 도토리서랍에 차곡차곡 쌓아둔 문장을 언제든 다시 꺼내보세요.',
  openGraph: {
    title: '도토리서랍 - 독서 기록 서비스',
    description: '책에서 만난 나만의 문장을 기록하세요',
    url: 'https://www.dotoribook.site/landing',
  },
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
