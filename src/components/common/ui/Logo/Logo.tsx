import Image from 'next/image';
import Link from 'next/link';

import { Size, sizeConfig } from './Logo.constant';

interface Props {
  size: Size;
}

export const Logo = ({ size }: Props) => {
  const { width, height } = sizeConfig[size];

  return (
    <Link href="/">
      <Image src="/images/seolab-logo.png" alt="도토리서랍 로고" width={width} height={height} />
    </Link>
  );
};
