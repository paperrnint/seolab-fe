'use client';

import { useRouter } from 'next/navigation';

import { Recommend } from '../Recommend/Recommend';
import { RecommendTitle } from '../Recommend/Title/Title';

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
    <>
      <Recommend.Section>
        <RecommendTitle>여름이니까, 이런 책 어때요?</RecommendTitle>
        <Recommend.Content>
          {SUMMER_BOOKS.map((book, i) => (
            <Recommend.Item key={i} onClick={() => onClickQuery(book.title)}>
              {book.title}
            </Recommend.Item>
          ))}
        </Recommend.Content>
      </Recommend.Section>
      <Recommend.Section>
        <RecommendTitle>여름이니까, 이런 책 어때요?</RecommendTitle>
        <Recommend.Content>
          {SUMMER_BOOKS.map((book, i) => (
            <Recommend.Item key={i} onClick={() => onClickQuery(book.title)}>
              {book.title}
            </Recommend.Item>
          ))}
        </Recommend.Content>
      </Recommend.Section>
      <Recommend.Section>
        <RecommendTitle>여름이니까, 이런 책 어때요?</RecommendTitle>
        <Recommend.Content>
          {SUMMER_BOOKS.map((book, i) => (
            <Recommend.Item key={i} onClick={() => onClickQuery(book.title)}>
              {book.title}
            </Recommend.Item>
          ))}
        </Recommend.Content>
      </Recommend.Section>
    </>
  );
};
