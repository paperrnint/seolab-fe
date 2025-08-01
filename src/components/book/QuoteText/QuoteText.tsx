import { useState } from 'react';

import { useError } from '@/hooks/useError';
import { editQuoteAction } from '@/lib/actions/book';

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
  const [isEditing, setIsEditing] = useState(false);
  const [curData, setCurData] = useState({
    page,
    text,
  });
  const { showError } = useError();

  const startEdit = () => {
    setIsEditing(true);
  };

  const endEdit = () => {
    setIsEditing(false);
  };

  const editQuote = async (text: string, page?: number | null) => {
    console.log(text, page);
    // @todo: send to server
    const result = await editQuoteAction(bookId, quoteId, { text, page });

    if (result.success) {
      setCurData({ page: result.data.page, text: result.data.text });
    } else {
      showError('quote', result.error.status);
    }

    // @todo: server response 로 update
    endEdit();
  };

  if (isEditing) {
    return (
      <QuoteInput.Root initialPage={page === null ? '' : page.toString()} initialText={text} onSubmit={editQuote}>
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
    <div className="relative">
      <div className={`flex py-1 px-4 pl-3 lg:pl-5 lg:pr-3 leading-6 border border-transparent`}>
        {showPage && <div className="w-14">{curData.page !== null && `${curData.page}p`}</div>}
        <div className={`flex-1 text-justify pl-3 ${isFavorite && 'underline-dotted'}`}>{curData.text}</div>
      </div>
      {isEditMode && (
        <div className="absolute right-0 top-1">
          <QuoteMoreMenu
            bookId={bookId}
            quoteId={quoteId}
            clickEdit={startEdit}
            onToggleFavorite={() => console.log('즐겨찾기 토글')}
          />
        </div>
      )}
    </div>
  );
};
