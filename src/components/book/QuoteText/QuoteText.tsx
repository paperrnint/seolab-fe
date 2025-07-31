import { useState } from 'react';

import { QuoteInput } from '../QuoteInput/QuoteInput';
import { QuoteMoreMenu } from '../QuoteMoreMenu/QuoteMoreMenu';

interface Props {
  page: number | null;
  text: string;
  isFavorite?: boolean;
  showPage?: boolean;
  isEditMode: boolean;
}

export const QuoteText = ({ page, text, isFavorite = false, showPage = true, isEditMode }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => {
    setIsEditing(true);
  };

  const endEdit = () => {
    setIsEditing(false);
  };

  const editQuote = (text: string, page?: number | null) => {
    console.log(text, page);
    // @todo: send to server

    // @todo: server response 로 update
    endEdit();
  };

  if (isEditing) {
    return (
      <QuoteInput.Root initialPage={page === null ? '' : page.toString()} initialText={text} onSubmit={editQuote}>
        <QuoteInput.Container bg="card">
          <QuoteInput.InputField />
          <QuoteInput.Action>
            <QuoteInput.CancelButton onCancel={endEdit}>취소</QuoteInput.CancelButton>
            <QuoteInput.SubmitButton>수정</QuoteInput.SubmitButton>
          </QuoteInput.Action>
        </QuoteInput.Container>
      </QuoteInput.Root>
    );
  }

  return (
    <div className="relative">
      <div className={`flex gap-4 py-1 px-4 pl-2 lg:pl-5 lg:pr-3 leading-6 border border-transparent`}>
        {showPage && <div className="w-11">{page !== null && `${page}p`}</div>}
        <div className={`flex-1 text-justify pl-3 ${isFavorite && 'underline-dotted'}`}>{text}</div>
      </div>
      {isEditMode && (
        <div className="absolute right-0 top-1">
          <QuoteMoreMenu
            clickEdit={startEdit}
            clickToggleFavorite={() => console.log('즐겨찾기 토글')}
            clickDelete={() => console.log('삭제')}
          />
        </div>
      )}
    </div>
  );
};
