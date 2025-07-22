import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';

import LoginPage from '@/app/(auth)/login/page';
import { useErrorModal } from '@/hooks/auth';

import { invalidUser, validUser } from '../__mocks__/constants/auth';
import { server } from '../__mocks__/server';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
jest.mock('@/hooks/auth/useErrorModal');
jest.mock('@/assets/kakao-logo.svg', () => 'kakao-logo');
jest.mock('@/assets/naver-logo.svg', () => 'naver-logo');

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

    (useErrorModal as jest.Mock).mockReturnValue({
      errorStatusCode: null,
      isOpen: false,
      showError: jest.fn(),
      resetError: jest.fn(),
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
    render(<LoginPage />);

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

    (useErrorModal as jest.Mock).mockReturnValue({
      errorStatusCode: null,
      isOpen: false,
      showError: mockShowError,
      resetError: jest.fn(),
    });

    render(<LoginPage />);

    const emailInput = await screen.findByPlaceholderText(/이메일/i);
    const passwordInput = await screen.findByPlaceholderText(/비밀번호/i);
    const loginButton = await screen.findByRole('button', { name: /로그인/i });

    fireEvent.change(emailInput, { target: { value: invalidUser.email } });
    fireEvent.change(passwordInput, { target: { value: invalidUser.password } });
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(mockShowError).toHaveBeenCalledWith(401);
      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
