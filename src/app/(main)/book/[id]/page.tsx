'use client';

import { BookHeader } from '@/components/BookHeader/BookHeader';
import { ExternalGradient } from '@/components/ExternalGradient/ExternalGradient';
import { QuoteInput } from '@/components/QuoteInput/QuoteInput';
import { QuoteText } from '@/components/QuoteText/QuoteText';
import { useBookMode } from '@/hooks/useBookMode';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';

export default function BookPage() {
  const { isEditMode } = useBookMode();
  const { showQuotePage } = useShowQuotePage();

  const QUOTE = {
    page: 29,
    quote:
      "한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.",
  };

  const QUOTES = Array.from({ length: 10 }, () => QUOTE);

  return (
    <div className="w-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto">
          <BookHeader
            author="아침달 편집부"
            count={2}
            publishedDate="2025.06.13"
            publisher="아침달"
            startAt="2025-06-30"
            thumbnail="/images/bookcover.jpg"
            title="여름어 사전"
          />

          <div className="p-2 pb-6 max-w-4xl">
            {QUOTES.map((quote, i) => (
              // edit mode 에선 항상 페이지 보여줘야 함
              <QuoteText key={i} page={quote.page} quote={quote.quote} showPage={isEditMode || showQuotePage} />
            ))}
          </div>
        </div>
      </div>

      {isEditMode && (
        <div className="w-full max-w-4xl mx-auto px-2 pb-2">
          <ExternalGradient variant="top" height={48}>
            <QuoteInput />
          </ExternalGradient>
        </div>
      )}
    </div>
  );
}
