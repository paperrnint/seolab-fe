export const emptyConfig = {
  all: {
    primaryText: '반가워요 👋',
    secondaryText: '지금 읽고 있는 책을 검색해 보세요',
    buttonText: '시작하기',
    redirectPath: '/search',
  },
  favorite: {
    primaryText: '즐겨찾는 책이 없네요 👀',
    secondaryText: '마음에 드는 책을 즐겨찾기 해보세요',
    buttonText: '홈으로',
    redirectPath: '/',
  },
} as const;
