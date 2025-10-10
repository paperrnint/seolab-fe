import Link from 'next/link';
import { LuBook, LuBookOpen, LuCircleArrowRight, LuHeart, LuPen } from 'react-icons/lu';

import { Faq } from '@/components/landing/Faq/Faq';
import { Feature } from '@/components/landing/Feature/Feature';
import { Hero } from '@/components/landing/Hero/Hero';
import { LandingNavigation } from '@/components/landing/Navigation/Navigation';
import { Step } from '@/components/landing/Step/Step';

export const dynamic = 'force-static';

export default function LandingPage() {
  const features = [
    {
      icon: <LuBook className="w-6 h-6" />,
      title: '다양한 책 지원',
      description: '지금 읽고 있는 책이 무엇이든, 검색하고 바로 기록해요',
      image: '/landing/feature-books.webp',
    },
    {
      icon: <LuPen className="w-6 h-6" />,
      title: '문장 기록',
      description: '책을 읽으며 문장 기록을 쉽게 저장할 수 있어요',
      image: '/landing/feature-input.webp',
    },
    {
      icon: <LuBookOpen className="w-6 h-6" />,
      title: '오늘의 문장을 언제든',
      description: '읽은지 오래된 책도 기록을 꺼내보며 다시 기억할 수 있어요',
      image: '/landing/feature-reading.webp',
    },
    {
      icon: <LuHeart className="w-6 h-6" />,
      title: '즐겨찾기',
      description: '좋아하는 책과 문장을 즐겨찾기 하고 빠르게 찾아보세요',
      image: '/landing/feature-fav.webp',
    },
  ];

  const steps = [
    { step: '1', title: '회원가입', desc: '이메일로 간편하게 시작하세요' },
    { step: '2', title: '책 검색', desc: '지금 읽고 있는 책을 검색하세요' },
    { step: '3', title: '문장 기록', desc: '마음에 드는 문장을 저장하세요' },
  ];

  const faqs = [
    {
      q: '무료로 사용할 수 있나요?',
      a: '네, 도토리서랍은 무료로 사용하실 수 있어요.',
    },
    {
      q: '얼마나 많은 문장을 저장할 수 있나요?',
      a: '제한 없이 원하는 만큼 문장을 저장하고 관리할 수 있어요.',
    },
    {
      q: '모바일 애플리케이션도 있나요?',
      a: '아직 애플리케이션은 출시되지 않았어요.',
    },
    {
      q: '데이터는 안전하게 보관되나요?',
      a: '모든 데이터는 암호화되어 안전하게 저장되며, 오직 본인만 접근할 수 있어요.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-card">
      {/* navigation */}
      <LandingNavigation />

      {/* sections */}
      <Hero />
      <Feature features={features} />
      <Step steps={steps} />
      <Faq faqs={faqs} />

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-text-btn">
          <h2 className="text-4xl md:text-3xl font-bold mb-6">도토리서랍과 기록하세요</h2>
          <Link
            href="/join"
            className="inline-flex justify-center items-center gap-2 px-6 py-3 text-subtle rounded-full text-xl font-bold hover:opacity-80 transition-opacity"
          >
            무료로 시작하기
            <LuCircleArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 pt-10 text-subtle">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-bold py-2">도토리서랍</h3>
          <p className="mb-6">책 속 문장을 간직하는 공간</p>
          <p className="mt-8 text-sm opacity-75">© 2025 도토리서랍. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
