'use client';

import { useRouter } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';

import { GradientSwiper } from '../GradientSwiper/GradientSwiper';
import { Recommend } from '../Recommend/Recommend';
import { RecommendTitle } from '../Recommend/Title/Title';

const BEST_BOOKS = [
  {
    title: '혼모노',
    author: '성해나',
  },
  {
    title: '청춘의 독서',
    author: '유시민',
  },
  {
    title: '모순',
    author: '양귀자',
  },
  {
    title: '안녕이라 그랬어',
    author: '김애란',
  },
  {
    title: '급류',
    author: '정대건',
  },
  {
    title: '소년이 온다',
    author: '한강',
  },
  {
    title: '단 한 번의 삶',
    author: '김영하',
  },
  {
    title: '행동은 불안을 이긴다',
    author: '롭 다이얼',
  },
];

const SUMMER_BOOKS = [
  {
    title: '여름어 사전',
    author: '아침달 편집부',
  },
  {
    title: '아무튼, 여름',
    author: '김신회',
  },
  {
    title: '바깥은 여름',
    author: '김애란',
  },
  {
    title: '첫 여름, 완주',
    author: '김금희',
  },
];

export const SearchSupport = () => {
  const router = useRouter();

  const onClickQuery = (query: string) => {
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="px-1 py-2">
      <Recommend.Section>
        <RecommendTitle>지금 인기 있는 책</RecommendTitle>
        <Recommend.Content>
          <GradientSwiper>
            {BEST_BOOKS.map((book, i) => (
              <SwiperSlide key={i}>
                <Recommend.Item onClick={() => onClickQuery(`${book.title} ${book.author}`)}>
                  {book.title}
                </Recommend.Item>
              </SwiperSlide>
            ))}
          </GradientSwiper>
        </Recommend.Content>
      </Recommend.Section>
      <Recommend.Section>
        <RecommendTitle>여름이니까, 이런 책 어때요?</RecommendTitle>
        <Recommend.Content>
          <GradientSwiper>
            {SUMMER_BOOKS.map((book, i) => (
              <SwiperSlide key={i}>
                <Recommend.Item onClick={() => onClickQuery(`${book.title} ${book.author}`)}>
                  {book.title}
                </Recommend.Item>
              </SwiperSlide>
            ))}
          </GradientSwiper>
        </Recommend.Content>
      </Recommend.Section>
    </div>
  );
};
