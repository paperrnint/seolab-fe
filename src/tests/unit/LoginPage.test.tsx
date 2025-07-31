import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import LoginPage from '@/app/(auth)/login/page';
import { useAuth } from '@/hooks/auth';
import { useError } from '@/hooks/useError';
import { validUser } from '@/tests/__mocks__/constants/auth';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/auth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('@/hooks/useError', () => ({
  useError: jest.fn(),
}));

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(),
}));

jest.mock('@/assets/kakao-logo.svg', () => 'kakao-logo');
jest.mock('@/assets/naver-logo.svg', () => 'naver-logo');

describe('LoginPage 렌더링', () => {
  const user = userEvent.setup();

  // 기본 모킹 설정 함수
  const setupMocks = (overrides = {}) => {
    const defaultMocks = {
      push: jest.fn(),
      login: jest.fn().mockResolvedValue({ success: true }),
      showError: jest.fn(),
      resetError: jest.fn(),
      clickModalButton: jest.fn(),
      register: jest.fn(() => ({
        onChange: jest.fn(),
        onBlur: jest.fn(),
        name: 'test',
        ref: jest.fn(),
      })),
      handleSubmit: jest.fn(),
      reset: jest.fn(),
      isSubmitting: false,
      isValid: false,
      ...overrides,
    };

    (useRouter as jest.Mock).mockReturnValue({
      push: defaultMocks.push,
    });

    (useAuth as jest.Mock).mockReturnValue({
      login: defaultMocks.login,
    });

    (useError as jest.Mock).mockReturnValue({
      error: null,
      showError: defaultMocks.showError,
      resetError: defaultMocks.resetError,
      clickModalButton: defaultMocks.clickModalButton,
    });

    (useForm as jest.Mock).mockReturnValue({
      register: defaultMocks.register,
      handleSubmit: defaultMocks.handleSubmit,
      reset: defaultMocks.reset,
      formState: {
        isSubmitting: defaultMocks.isSubmitting,
        isValid: defaultMocks.isValid,
      },
    });

    return defaultMocks;
  };

  beforeEach(() => {
    jest.clearAllMocks();
    setupMocks();
  });

  test('정상적으로 렌더링된다', () => {
    render(<LoginPage />);

    expect(screen.getByPlaceholderText('이메일')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('비밀번호')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();
  });

  test('회원가입 링크가 정상적으로 렌더링된다', () => {
    render(<LoginPage />);

    expect(screen.getByText('회원가입')).toBeInTheDocument();

    const joinLink = screen.getByText('회원가입').closest('a');
    expect(joinLink).toHaveAttribute('href', '/join');
  });

  test('이메일과 비밀번호 입력이 정상 동작한다', async () => {
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText('이메일');
    const passwordInput = screen.getByPlaceholderText('비밀번호');

    await user.type(emailInput, validUser.email);
    await user.type(passwordInput, validUser.password);

    expect(emailInput).toHaveValue(validUser.email);
    expect(passwordInput).toHaveValue(validUser.password);
  });

  test('로그인 버튼이 초기에 비활성화 상태이다', () => {
    render(<LoginPage />);

    const loginButton = screen.getByRole('button', { name: '로그인' });
    expect(loginButton).toBeDisabled();
  });

  test('유효한 폼 입력 시 버튼이 활성화된다', async () => {
    setupMocks({ isValid: true });
    render(<LoginPage />);

    const loginButton = screen.getByRole('button', { name: '로그인' });
    expect(loginButton).toBeEnabled();
  });

  test('폼 제출 시 onSubmit이 호출된다', async () => {
    const mockHandleSubmit = jest.fn((fn) => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fn({ email: validUser.email, password: validUser.password });
    });

    setupMocks({
      isValid: true,
      handleSubmit: mockHandleSubmit,
    });

    render(<LoginPage />);

    const form = screen.getByRole('button', { name: '로그인' }).closest('form');
    fireEvent.submit(form!);

    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});
