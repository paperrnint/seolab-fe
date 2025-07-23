import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';

import JoinSimple from '@/app/(auth)/join/page';
import { useErrorModal } from '@/hooks/auth';

import { duplicatedUser, invalidUser, validUser } from '../__mocks__/constants/auth';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
jest.mock('@/hooks/auth/useErrorModal');

describe('JoinPage - 통합 테스트', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
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

  test('잘못된 형식의 이메일 입력 시 가입하기 버튼이 비활성화 된다.', async () => {
    render(<JoinSimple />);

    const emailInput = await screen.findByPlaceholderText(/이메일/i);
    const passwordInput = await screen.findByPlaceholderText(/비밀번호$/i);
    const confirmPasswordInput = await screen.findByPlaceholderText(/비밀번호 확인/i);
    const joinButton = await screen.findByRole('button', { name: /가입하기/i });

    await userEvent.type(emailInput, invalidUser.email);
    await userEvent.type(passwordInput, validUser.password);
    await userEvent.type(confirmPasswordInput, validUser.password);

    await waitFor(() => {
      expect(joinButton).toBeDisabled();
    });
  });

  test('잘못된 형식의 비밀번호 입력 시 가입하기 버튼이 비활성화 된다.', async () => {
    render(<JoinSimple />);

    const emailInput = await screen.findByPlaceholderText(/이메일/i);
    const passwordInput = await screen.findByPlaceholderText(/비밀번호$/i);
    const confirmPasswordInput = await screen.findByPlaceholderText(/비밀번호 확인/i);
    const joinButton = await screen.findByRole('button', { name: /가입하기/i });

    await userEvent.type(emailInput, validUser.email);
    await userEvent.type(passwordInput, invalidUser.password);
    await userEvent.type(confirmPasswordInput, invalidUser.password);

    await waitFor(() => {
      expect(joinButton).toBeDisabled();
    });
  });

  test('비밀번호 확인 입력이 비밀번호와 일치하지 않을 시 가입하기 버튼이 비활성화 된다.', async () => {
    render(<JoinSimple />);

    const emailInput = await screen.findByPlaceholderText(/이메일/i);
    const passwordInput = await screen.findByPlaceholderText(/비밀번호$/i);
    const confirmPasswordInput = await screen.findByPlaceholderText(/비밀번호 확인/i);
    const joinButton = await screen.findByRole('button', { name: /가입하기/i });

    await userEvent.type(emailInput, validUser.email);
    await userEvent.type(passwordInput, validUser.password);
    await userEvent.type(confirmPasswordInput, invalidUser.password);

    await waitFor(() => {
      expect(joinButton).toBeDisabled();
    });
  });

  test('유효한 이메일/비밀번호로 가입 시 로그인 페이지로 이동한다.', async () => {
    render(<JoinSimple />);

    const emailInput = await screen.findByPlaceholderText(/이메일/i);
    const passwordInput = await screen.findByPlaceholderText(/비밀번호$/i);
    const confirmPasswordInput = await screen.findByPlaceholderText(/비밀번호 확인/i);
    const joinButton = await screen.findByRole('button', { name: /가입하기/i });

    fireEvent.change(emailInput, { target: { value: validUser.email } });
    fireEvent.change(passwordInput, { target: { value: validUser.password } });
    fireEvent.change(confirmPasswordInput, { target: { value: validUser.password } });

    await waitFor(() => {
      expect(joinButton).not.toBeDisabled();
    });

    await userEvent.click(joinButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/login');
    });
  });

  test('이미 존재하는 이메일로 가입 시 에러가 표시된다.', async () => {
    const mockShowError = jest.fn();

    (useErrorModal as jest.Mock).mockReturnValue({
      errorStatusCode: null,
      isOpen: false,
      showError: mockShowError,
      resetError: jest.fn(),
    });

    render(<JoinSimple />);

    const emailInput = await screen.findByPlaceholderText(/이메일/i);
    const passwordInput = await screen.findByPlaceholderText(/비밀번호$/i);
    const confirmPasswordInput = await screen.findByPlaceholderText(/비밀번호 확인/i);
    const joinButton = await screen.findByRole('button', { name: /가입하기/i });

    fireEvent.change(emailInput, { target: { value: duplicatedUser.email } });
    fireEvent.change(passwordInput, { target: { value: duplicatedUser.password } });
    fireEvent.change(confirmPasswordInput, { target: { value: duplicatedUser.password } });

    await waitFor(() => {
      expect(joinButton).not.toBeDisabled();
    });

    await userEvent.click(joinButton);

    await waitFor(() => {
      expect(mockShowError).toHaveBeenCalledWith(409);
      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
