import Image, { ImageProps } from 'next/image';

import { bookConfig } from './BookCover.constant';
import { BookCoverEmpty } from './BookCoverEmtpy';

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  hasBorder?: boolean;
  isRounded?: boolean;
  isSquare?: boolean;
  hasShadow?: boolean;
}

export const BookCover = ({
  src,
  alt = '책 커버',
  size = 'md',
  hasBorder = false,
  isRounded = false,
  isSquare = false,
  hasShadow = false,
  ...props
}: Props) => {
  const isValid = src && src.trim() !== '';
  const { width, spineClasses, rounded } = bookConfig[size];

  const squareContainer = isSquare ? 'aspect-square' : '';
  const squareImage = isSquare ? 'object-cover object-top' : '';
  const shadow = hasShadow ? 'shadow-xl' : '';

  return (
    <div className={`flex-shrink-0 ${shadow}`}>
      <div
        className={`
        flex relative w-fit
        after:absolute after:top-0 after:bottom-0 after:content-['']
        after:bg-gradient-to-r after:from-black/12 after:via-black/2 after:to-transparent
        overflow-hidden
        ${squareContainer}
        ${spineClasses}
        ${shadow}
        ${hasBorder && bookConfig.border}
        ${isRounded && rounded}
        `}
      >
        {isValid ? (
          <Image
            className={squareImage}
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width, height: 'auto' }}
            {...props}
          />
        ) : (
          <BookCoverEmpty width={width} alt={alt} />
        )}
      </div>
    </div>
  );
};
