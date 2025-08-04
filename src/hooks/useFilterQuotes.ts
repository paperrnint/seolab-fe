import { useCallback, useState } from 'react';

import { FilterOption, QUOTE_FILTER_OPTIONS } from '@/constants/quote';
import { Quote } from '@/types/domain/book';

interface Options {
  disabled?: boolean;
}

export const useFilterQuotes = (allQuotes: Quote[], options: Options = {}) => {
  const { disabled = false } = options;
  const [option, setOption] = useState<FilterOption>(QUOTE_FILTER_OPTIONS[0]);

  const getFilteredQuotes = useCallback(
    (quotes: Quote[]) => {
      if (disabled) {
        return quotes;
      }

      switch (option.value) {
        case 'all':
          return quotes;
        case 'favorite':
          return quotes.filter((quote) => quote.isFavorite);
      }
    },
    [disabled, option.value]
  );

  return {
    filteredQuotes: getFilteredQuotes(allQuotes),
    option,
    setOption,
  };
};
