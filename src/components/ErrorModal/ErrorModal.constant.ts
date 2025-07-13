export type ErrorType = 'default' | 'joinDuplicatedEmail' | 'loginUnauthorized' | 'authValidation';

export interface ErrorConfig {
  title: string;
  text: string;
  button: string;
}

export const errorConfig: Record<ErrorType, ErrorConfig> = {
  default: {
    title: '알 수 없는 에러',
    text: '알 수 없는 에러가 발생했어요\n잠시 후 다시 시도해 보세요',
    button: '확인',
  },
  joinDuplicatedEmail: {
    title: '가입한 적이 있나요?',
    text: '해당 이메일은 이미 가입된 이메일이에요\n로그인으로 돌아가서 다시 시도해 보세요',
    button: '로그인 하러 가기',
  },
  loginUnauthorized: {
    title: '로그인 에러',
    text: '이메일 또는 비밀번호가 일치하지 않아요\n이메일과 비밀번호를 다시 확인해 주세요',
    button: '확인',
  },
  authValidation: {
    title: '적절하지 않은 형식',
    text: '적절한 이메일 또는 비밀번호가 아니에요\n이메일 형식과 비밀번호 형식을 확인하세요\n(최소 8-20자, 대소문자, 숫자, 특수문자 포함)',
    button: '확인',
  },
};
