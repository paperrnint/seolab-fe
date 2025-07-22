export const validUser = {
  email: 'test@example.com',
  password: 'validPassword123!',
} as const;

export const invalidUser = {
  email: 'invalid@example.com',
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
