import { useLayoutEffect, useState } from 'react';

import { useError } from '@/hooks';
import { editQuoteAction, toggleQuoteFavoriteAction } from '@/lib/actions/book';

import { QuoteInput } from '../QuoteInput/QuoteInput';
import { QuoteMoreMenu } from '../QuoteMoreMenu/QuoteMoreMenu';

interface Props {
  bookId: string;
  quoteId: string;
  page: number | null;
  text: string;
  updatedAt: string;
  isFavorite?: boolean;
  showPage?: boolean;
  isEditMode: boolean;
}

export const QuoteText = ({
  bookId,
  quoteId,
  page,
  text,
  updatedAt,
  isFavorite = false,
  showPage = true,
  isEditMode,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [curData, setCurData] = useState({ page, text, isFavorite });
  const { showError } = useError();

  useLayoutEffect(() => {
    setIsActive(false);
  }, [isEditMode]);

  const hoverClass = isEditMode ? 'hover:bg-bg-hover' : '';
  const bgClass = isEditMode && isActive ? 'bg-bg-hover' : 'bg-transparent';

  const startEdit = () => {
    setIsEditing(true);
  };

  const endEdit = () => {
    setIsEditing(false);
  };

  const editQuote = async (text: string, page?: number | null) => {
    console.log(text, page);
    const result = await editQuoteAction(bookId, quoteId, { text, page });

    if (result.success) {
      setCurData((prev) => ({ ...prev, page: result.data.page, text: result.data.text }));
      endEdit();
    } else {
      showError('quote', result.error.status);
    }
  };

  const toggleQuoteFavorite = async () => {
    const result = await toggleQuoteFavoriteAction(bookId, quoteId);

    if (result.success) {
      setCurData((prev) => ({ ...prev, isFavorite: !prev.isFavorite }));
    } else {
      showError('quote', result.error.status);
    }
  };

  if (isEditing) {
    return (
      <QuoteInput.Root
        initialPage={curData.page === null ? '' : curData.page.toString()}
        initialText={curData.text}
        onSubmit={editQuote}
      >
        <QuoteInput.Container bg="card">
          <QuoteInput.InputField minLine={1} />
          <QuoteInput.Action>
            <p className="text-[10px] text-subtle">{updatedAt}</p>
            <QuoteInput.CancelButton onCancel={endEdit}>취소</QuoteInput.CancelButton>
            <QuoteInput.SubmitButton>수정</QuoteInput.SubmitButton>
          </QuoteInput.Action>
        </QuoteInput.Container>
      </QuoteInput.Root>
    );
  }

  return (
    <div className={`relative rounded-md ${hoverClass} ${bgClass}`}>
      <div className={`flex py-1 px-4 pl-3 lg:pl-4 lg:pr-3 leading-6 border border-transparent`}>
        {showPage && <div className="w-14">{curData.page !== null && `${curData.page}p`}</div>}
        <p className={`flex-1 text-justify pl-3 ${isFavorite && 'underline-dotted'} relative`}>{curData.text}</p>
      </div>
      {isEditMode && (
        <div className="absolute right-0 top-1">
          <QuoteMoreMenu
            bookId={bookId}
            quoteId={quoteId}
            isFavorite={isFavorite}
            clickEdit={startEdit}
            onToggleFavorite={toggleQuoteFavorite}
            menuOpenCallback={() => {
              setIsActive(true);
            }}
            menuCloseCallback={() => {
              setIsActive(false);
            }}
          />
        </div>
      )}
    </div>
  );
};
