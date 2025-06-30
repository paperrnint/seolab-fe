import Image, { ImageProps } from 'next/image';
import { bookConfig } from './BookCover.constant';

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  hasBorder?: boolean;
  isRounded?: boolean;
}

export const BookCover = ({
  src,
  alt = '책 커버',
  size = 'md',
  hasBorder = false,
  isRounded = false,
  ...props
}: Props) => {
  const { width, spineClasses, rounded } = bookConfig[size];

  return (
    <div
      className={`
        flex relative w-fit
        after:absolute after:top-0 after:bottom-0 after:content-['']
        after:bg-gradient-to-r after:from-black/12 after:via-black/2 after:to-transparent
        overflow-hidden
        ${spineClasses}
        ${hasBorder && bookConfig.border}
        ${isRounded && rounded}
        `}
    >
      <Image src={src} alt={alt} width={0} height={0} sizes="100vw" style={{ width, height: 'auto' }} {...props} />
    </div>
  );
};
