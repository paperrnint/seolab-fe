'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperClass } from 'swiper/react';

import { InternalGradient } from '../InternalGradient/InternalGradient';

interface Props {
  children: React.ReactNode;
}

export const GradientSwiper = ({ children }: Props) => {
  const [isMoving, setIsMoving] = useState(false);
  const [gradientDirs, setGradientDirs] = useState<('left' | 'right')[]>([]);

  const updateGradientDirs = (swiper: SwiperClass) => {
    const { isBeginning, isEnd } = swiper;

    if (isBeginning && isEnd) {
      setGradientDirs([]); // no external slides
    } else if (isBeginning) {
      setGradientDirs(['right']); // has right slides
    } else if (isEnd) {
      setGradientDirs(['left']); // has left slides
    } else {
      setGradientDirs(['left', 'right']); // has left + right slides
    }
  };

  const onSwiper = (swiper: SwiperClass) => {
    updateGradientDirs(swiper); // init gradientDirs
  };

  const onSlideChange = (swiper: SwiperClass) => {
    updateGradientDirs(swiper);
    setIsMoving(false);
  };

  const onSliderMove = () => {
    setIsMoving(true);
  };

  useEffect(() => {
    // no external slides -> no gradient
    if (gradientDirs.length === 0) {
      return;
    }

    // when moving -> gradient 무조건
    if (isMoving) {
      setGradientDirs(['left', 'right']);
    }
  }, [gradientDirs.length, isMoving]);

  return (
    <InternalGradient directions={gradientDirs}>
      <Swiper
        style={{ margin: '0' }}
        slidesPerView={'auto'}
        spaceBetween={8}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        onSliderMove={onSliderMove}
      >
        {children}
      </Swiper>
    </InternalGradient>
  );
};
