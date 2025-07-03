import { Badge } from '../Badge/Badge';
import { BookCover } from '../BookCover/BookCover';

interface Props {
  title: string;
  thumbnail: string;
  author: string;
  publisher: string;
  publishedDate: string;
  description?: string;
  tags?: string[];
}
export const BookItem = ({ title, thumbnail, author, publisher, publishedDate, description, tags }: Props) => {
  return (
    <div className="flex gap-3.5 px-2 py-4 border-b border-border">
      <BookCover src={thumbnail} size="sm" hasBorder />
      <div className="flex flex-col gap-2 w-full">
        <div>
          <div className="flex flex-wrap items-center justify-between w-full mb-1">
            <h3 className="font-bold text-base leading-7">{title}</h3>
          </div>
          <div className="font-bold text-xs leading-5 text-secondary">{`${author} · ${publisher} · ${publishedDate}`}</div>
        </div>
        {tags && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </div>
        )}
        {description && (
          <div>
            <div className="text-xs leading-5 text-subtle line-clamp-2">{description}</div>
          </div>
        )}
      </div>
    </div>
  );
};
