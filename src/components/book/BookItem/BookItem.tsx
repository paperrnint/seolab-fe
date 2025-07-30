'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import { useErrorModal } from '@/hooks/auth';
import { createBookAction } from '@/lib/actions/book';
import { mapToBookError, mapToBookId } from '@/lib/mappers/bookMapper';
import { BookSearchItem } from '@/types/domain/book';

import { Badge } from '../../common/ui/Badge/Badge';
import { ErrorModal } from '../../modal/ErrorModal/ErrorModal';
import { BookCover } from '../BookCover/BookCover';

interface Props {
  book: BookSearchItem;
  tags?: string[];
}

export const BookItem = ({ book, tags }: Props) => {
  const [nextId, setNextId] = useState<string | null>(null);

  const [showAll, setShowAll] = useState(false);
  const { errorStatusCode, isOpen, showError, resetError } = useErrorModal();
  const { title, description, publishedDate, publisher, thumbnail, author } = book;
  const lineClass = showAll ? '' : 'line-clamp-2';

  const router = useRouter();

  const onToggle = () => {
    setShowAll((prev) => !prev);
  };

  const onClickCreate = async () => {
    const result = await createBookAction(book);

    if (result.success) {
      const { id } = mapToBookId(result.data);
      router.push(`/book/${id}?mode=edit`);
    } else {
      const { status, data } = result.error;
      showError(status);
      const { id } = mapToBookError(data);
      setNextId(id);
    }
  };

  const onClickModal = () => {
    if (!nextId) {
      return;
    }
    router.push(`/book/${nextId}?mode=edit`);
  };

  const onCloseModal = () => {
    resetError();
  };

  return (
    <div className="flex gap-3.5 px-2 py-4 border-b border-border">
      <BookCover src={thumbnail} size="sm" hasBorder />
      <div className="flex flex-col gap-2 w-full">
        <div>
          <div className="flex flex-wrap items-center justify-between w-full mb-1">
            <h3 className="font-bold text-base leading-7">{title}</h3>
          </div>
          <div className="font-bold text-xs leading-5 text-secondary">
            {`${author} · ${publisher} · ${publishedDate}`}
          </div>
        </div>
        {tags && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </div>
        )}
        {description && (
          <div className="cursor-pointer" onClick={onToggle}>
            <div className={`text-xs leading-5 text-subtle text-justify ${lineClass}`}>{description}</div>
          </div>
        )}
      </div>
      <button className="flex items-center cursor-pointer" onClick={onClickCreate}>
        <div className="p-2 bg-btn-subtle text-subtle h-fit rounded-full ">
          <FaPlus size={12} />
        </div>
      </button>
      {errorStatusCode && (
        <ErrorModal
          errorType="createBooks"
          errorStatusCode={errorStatusCode}
          isOpen={isOpen}
          onClickButton={onClickModal}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
};
