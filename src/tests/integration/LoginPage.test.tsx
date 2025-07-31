import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'jotai';
import { useRouter } from 'next/navigation';

import LoginPage from '@/app/(auth)/login/page';
import { GlobalErrorModal } from '@/components/error/GloabalErrorModal/GlobalErrorModal';
import { useError } from '@/hooks/useError'; // useError로 변경

import { validUser, wrongUser } from '../__mocks__/constants/auth';
import { server } from '../__mocks__/server';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
jest.mock('@/hooks/useError'); // useError로 변경
jest.mock('@/assets/kakao-logo.svg', () => 'kakao-logo');
jest.mock('@/assets/naver-logo.svg', () => 'naver-logo');

// 테스트용 래퍼 컴포넌트
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider>
    {children}
    <GlobalErrorModal />
  </Provider>
);

describe('LoginPage - MSW 통합 테스트', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    server.listen({
      onUnhandledRequest: 'warn',
    });

    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    (useError as jest.Mock).mockReturnValue({
      error: null,
      showError: jest.fn(),
      resetError: jest.fn(),
      clickModalButton: jest.fn(),
    });
  });

  test('MSW 작동 확인', async () => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: validUser.email, password: validUser.password }),
    });

    expect(response).toBeDefined();
  });

  test('유효한 이메일/비밀번호로 로그인 성공 시 홈페이지로 이동한다.', async () => {
    render(
      <TestWrapper>
        <LoginPage />
      </TestWrapper>
    );

    const emailInput = await screen.findByPlaceholderText(/이메일/i);
    const passwordInput = await screen.findByPlaceholderText(/비밀번호/i);
    const loginButton = await screen.findByRole('button', { name: /로그인/i });

    fireEvent.change(emailInput, { target: { value: validUser.email } });
    fireEvent.change(passwordInput, { target: { value: validUser.password } });
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/');
    });
  });

  test('존재하지 않는 이메일/비밀번호 입력 시 로그인 실패 처리한다', async () => {
    const mockShowError = jest.fn();

    (useError as jest.Mock).mockReturnValue({
      error: null,
      showError: mockShowError,
      resetError: jest.fn(),
      clickModalButton: jest.fn(),
    });

    render(
      <TestWrapper>
        <LoginPage />
      </TestWrapper>
    );

    const emailInput = await screen.findByPlaceholderText(/이메일/i);
    const passwordInput = await screen.findByPlaceholderText(/비밀번호/i);
    const loginButton = await screen.findByRole('button', { name: /로그인/i });

    fireEvent.change(emailInput, { target: { value: wrongUser.email } });
    fireEvent.change(passwordInput, { target: { value: wrongUser.password } });
    await userEvent.click(loginButton);

    await waitFor(() => {
      // showError 호출 파라미터 변경 (errorType 추가)
      expect(mockShowError).toHaveBeenCalledWith('login', 401, expect.any(Function));
      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
