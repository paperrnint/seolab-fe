import Image from 'next/image';

interface Props {
  hideMobile?: boolean;
}

export const MainImage = ({ hideMobile = true }: Props) => {
  const hideClass = hideMobile ? 'md:block hidden' : 'block';

  return (
    <div className={`flex-shrink-0 p-10 ${hideClass}`}>
      <Image src="/images/seolab-main.png" alt="일러스트" width={220} height={304} />
    </div>
  );
};
