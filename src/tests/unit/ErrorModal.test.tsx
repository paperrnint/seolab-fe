import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ErrorModal } from '@/components/modal/ErrorModal/ErrorModal';
import { ErrorType } from '@/constants';

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

    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    const portalRoot = document.getElementById('portal');
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  test('모달이 열렸을 때 올바르게 렌더링된다.', () => {
    render(<ErrorModal {...defaultProps} />);

    const portalRoot = document.getElementById('portal');
    expect(within(portalRoot!).getByText('로그인 실패')).toBeInTheDocument();
    expect(within(portalRoot!).getByRole('button', { name: '확인' })).toBeInTheDocument();
  });

  test('모달이 닫혔을 때 렌더링되지 않는다.', () => {
    render(<ErrorModal {...defaultProps} isOpen={false} />);

    const portalRoot = document.getElementById('portal');
    if (portalRoot) {
      expect(within(portalRoot).queryByText('로그인 실패')).not.toBeInTheDocument();
    } else {
      expect(portalRoot).toBeFalsy(); // portalRoot 없어도 통과
    }
  });

  test('확인 버튼 클릭 시 onClickButton이 호출된다.', async () => {
    render(<ErrorModal {...defaultProps} />);

    const portalRoot = document.getElementById('portal');
    const confirmButton = within(portalRoot!).getByRole('button', { name: '확인' });

    await user.click(confirmButton);
    expect(mockOnClickButton).toHaveBeenCalledTimes(1);
  });

  test('backdrop 클릭 시 onCloseModal이 호출된다.', async () => {
    render(<ErrorModal {...defaultProps} />);

    const portalRoot = document.getElementById('portal');
    const backdrop = within(portalRoot!).queryByTestId('modal-backdrop');

    await user.click(backdrop!);
    expect(mockOnCloseModal).toHaveBeenCalledTimes(1);
  });

  test('ESC 키 누를 시 onCloseModal이 호출된다.', async () => {
    render(<ErrorModal {...defaultProps} />);

    await user.keyboard('{Escape}');
    expect(mockOnCloseModal).toHaveBeenCalledTimes(1);
  });
});
