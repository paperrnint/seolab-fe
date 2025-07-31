import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'jotai';

import { GlobalErrorModal } from '@/components/error/GloabalErrorModal/GlobalErrorModal';
import { useError } from '@/hooks/useError';

jest.mock('@/components/modal/Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

const TestComponent = () => {
  const { showError } = useError();

  return (
    <div>
      <button
        onClick={() => showError('login', 400, () => console.log('custom action'))}
        data-testid="trigger-login-error"
      >
        로그인 에러 발생
      </button>
      <button onClick={() => showError('signup', 400)} data-testid="trigger-signup-error">
        회원가입 에러 발생
      </button>
      <button onClick={() => showError('search', 400)} data-testid="trigger-search-error">
        검색 에러 발생
      </button>
      <button onClick={() => showError('quote', 400)} data-testid="trigger-quote-error">
        문장 에러 발생
      </button>
      <button onClick={() => showError('createBooks', 409)} data-testid="trigger-book-error">
        책 추가 에러 발생
      </button>
      <GlobalErrorModal />
    </div>
  );
};

describe('GlobalErrorModal - 실제 useError 훅을 사용한 테스트', () => {
  const user = userEvent.setup();

  test('초기 상태에서는 모달이 표시되지 않는다', () => {
    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('로그인 에러 발생 시 모달이 표시된다', async () => {
    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    const triggerButton = screen.getByTestId('trigger-login-error');
    await user.click(triggerButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/로그인 실패/)).toBeInTheDocument();
  });

  test('회원가입 에러 발생 시 모달이 표시된다', async () => {
    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    const triggerButton = screen.getByTestId('trigger-signup-error');
    await user.click(triggerButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/회원가입 실패/)).toBeInTheDocument();
  });

  test('검색 에러 발생 시 모달이 표시된다', async () => {
    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    const triggerButton = screen.getByTestId('trigger-search-error');
    await user.click(triggerButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/검색 실패/)).toBeInTheDocument();
  });

  test('문장 추가 에러 발생 시 모달이 표시된다', async () => {
    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    const triggerButton = screen.getByTestId('trigger-quote-error');
    await user.click(triggerButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/빈 문장/)).toBeInTheDocument();
  });

  test('책 추가 에러 발생 시 모달이 표시된다', async () => {
    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    const triggerButton = screen.getByTestId('trigger-book-error');
    await user.click(triggerButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/이미 추가된 책/)).toBeInTheDocument();
  });

  test('확인 버튼 클릭 시 모달이 닫힌다', async () => {
    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    const triggerButton = screen.getByTestId('trigger-login-error');
    await user.click(triggerButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    const confirmButton = screen.getByRole('button', { name: /확인/ });
    await user.click(confirmButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('ESC 키로 모달을 닫을 수 있다', async () => {
    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    const triggerButton = screen.getByTestId('trigger-signup-error');
    await user.click(triggerButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('커스텀 액션이 있는 에러의 확인 버튼 클릭 시 액션이 실행된다', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    render(
      <Provider>
        <TestComponent />
      </Provider>
    );

    const triggerButton = screen.getByTestId('trigger-login-error');
    await user.click(triggerButton);

    // 확인 버튼 클릭
    const confirmButton = screen.getByRole('button', { name: /확인/ });
    await user.click(confirmButton);

    expect(consoleSpy).toHaveBeenCalledWith('custom action');

    consoleSpy.mockRestore();
  });
});
