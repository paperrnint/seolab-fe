import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

import { server } from './__mocks__/server';

Object.assign(global, { TextDecoder, TextEncoder });

// MSW 서버 설정
beforeAll(() => {
  server.listen({
    // 처리되지 않은 요청에 대해 경고 표시
    onUnhandledRequest: 'warn',
  });
});

afterEach(() => {
  // 각 테스트 후 핸들러 리셋
  server.resetHandlers();
});

afterAll(() => {
  // 테스트 완료 후 서버 종료
  server.close();
});
