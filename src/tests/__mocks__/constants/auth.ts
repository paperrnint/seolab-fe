export const validUser = {
  email: 'test@example.com',
  password: 'validPassword123!',
} as const;

export const wrongUser = {
  email: 'wrong@example.com',
  password: 'wrongPassword123!',
} as const;

export const mockAuthResponse = {
  success: {
    accessToken: 'mock-token',
    username: 'test',
    email: 'test@example.com',
  },
  failure: {
    message: '이메일 또는 비밀번호가 일치하지 않습니다.',
  },
} as const;

export const invalidUser = {
  email: 'invalid-email',
  password: 'short',
} as const;

export const duplicatedUser = {
  email: 'duplicated@example.com',
  password: 'wrongPassword123!',
} as const;

export const mockSignupResponse = {
  success: {
    email: 'test@example.com',
    username: 'test',
  },
  duplicated: {
    message: '이미 사용중인 이메일입니다.',
  },
  failure: {
    message: '올바른 이메일 또는 비밀번호 형식이 아닙니다.',
  },
} as const;
