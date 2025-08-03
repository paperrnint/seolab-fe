'use client';

import { SwiperClass } from 'swiper/react';

import { navigationBtnConfig } from './NavigationButton.constant';

interface Props {
  sliderRef: React.RefObject<SwiperClass | null>;
  isVisible: boolean;
  disabled: boolean;
  direction: 'prev' | 'next';
}

export const NavigationButton = ({ sliderRef, isVisible, disabled, direction }: Props) => {
  const isPrev = direction === 'prev';
  const { position, translate, icon } = navigationBtnConfig[direction];

  const onClick = () => {
    if (isPrev) {
      sliderRef.current?.slidePrev();
    } else {
      sliderRef.current?.slideNext();
    }
  };

  if (disabled) return null;

  return (
    <div
      className={`
        absolute top-0 bottom-0 ${position}
        z-20 flex justify-center items-center
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translate} pointer-events-none`}
      `}
    >
      <button
        className="rounded-full p-2 bg-white shadow-sm transition-all duration-200 cursor-pointer"
        onClick={onClick}
      >
        {icon}
      </button>
    </div>
  );
};
