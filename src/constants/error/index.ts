export interface ErrorMessage {
  title: string;
  text: string;
  button: string;
}

export const ERROR_MESSAGES = {
  signup: {
    400: {
      title: '회원가입 실패',
      text: '적절한 이메일 또는 비밀번호가 아니에요\n이메일 형식과 비밀번호 형식을 확인하세요\n(최소 8-20자, 대소문자, 숫자, 특수문자 포함)',
      button: '확인',
    },
    409: {
      title: '가입한 적이 있나요?',
      text: '해당 이메일은 이미 가입된 이메일이에요\n로그인으로 돌아가서 다시 시도해 보세요',
      button: '로그인 하러 가기',
    },
  },
  login: {
    400: {
      title: '로그인 실패',
      text: '적절한 이메일 또는 비밀번호가 아니에요\n이메일 형식과 비밀번호 형식을 확인하세요\n(최소 8-20자, 대소문자, 숫자, 특수문자 포함)',
      button: '확인',
    },
    401: {
      title: '로그인 실패',
      text: '이메일 또는 비밀번호가 일치하지 않아요\n이메일과 비밀번호를 다시 확인해 주세요',
      button: '확인',
    },
  },
  refresh: {
    401: {
      title: '인증 만료',
      text: '로그인이 만료되었어요\n다시 로그인해 주세요',
      button: '로그인하기',
    },
  },
  search: {
    400: {
      title: '검색 실패',
      text: '적절한 검색어가 아니에요\n찾고 있는 책을 입력해 주세요',
      button: '확인',
    },
    401: {
      title: '인증 만료',
      text: '로그인이 만료되었어요\n다시 로그인해 주세요',
      button: '로그인하기',
    },
  },
  createBooks: {
    409: {
      title: '앗, 이미 추가된 책이에요',
      text: '해당 책 기록으로 이동할까요?',
      button: '확인',
    },
  },
  quote: {
    400: {
      title: '빈 문장이에요',
      text: '문장을 기록 후 다시 시도해 보세요',
      button: '확인',
    },
    401: {
      title: '인증 만료',
      text: '로그인이 만료되었어요\n다시 로그인해 주세요',
      button: '로그인하기',
    },
    403: {
      title: '접근 불가',
      text: '접근할 수 없는 기록이에요',
      button: '확인',
    },
  },
  default: {
    unknown: {
      title: '알 수 없는 에러',
      text: '알 수 없는 에러가 발생했어요\n잠시 후 다시 시도해 보세요',
      button: '확인',
    },
  },
} as const;

export type ErrorType = keyof typeof ERROR_MESSAGES;
