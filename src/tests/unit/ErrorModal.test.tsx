import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ErrorModal } from '@/components/error/ErrorModal/ErrorModal';
import { ErrorType } from '@/constants';

// Portal을 간단히 Mock
jest.mock('@/components/modal/Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('react-icons/fa6', () => ({
  FaCircleExclamation: () => 'error-icon',
}));

describe('ErrorModal', () => {
  const user = userEvent.setup();
  const mockOnCloseModal = jest.fn();
  const mockOnClickButton = jest.fn();

  const defaultProps = {
    errorType: 'login' as ErrorType,
    errorStatusCode: 401,
    isOpen: true,
    onCloseModal: mockOnCloseModal,
    onClickButton: mockOnClickButton,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('모달이 열렸을 때 올바르게 렌더링된다', () => {
    render(<ErrorModal {...defaultProps} />);

    expect(screen.getByText('로그인 실패')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '확인' })).toBeInTheDocument();
  });

  test('모달이 닫혔을 때 렌더링되지 않는다', () => {
    render(<ErrorModal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('로그인 실패')).not.toBeInTheDocument();
  });

  test('확인 버튼 클릭 시 onClickButton이 호출된다', async () => {
    render(<ErrorModal {...defaultProps} />);

    const confirmButton = screen.getByRole('button', { name: '확인' });
    await user.click(confirmButton);

    expect(mockOnClickButton).toHaveBeenCalledTimes(1);
  });

  test('ESC 키 누를 시 onCloseModal이 호출된다', async () => {
    render(<ErrorModal {...defaultProps} />);

    await user.keyboard('{Escape}');
    expect(mockOnCloseModal).toHaveBeenCalledTimes(1);
  });
});
