import { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass } from 'swiper/react';

import { NavigationButton } from './NavigationButton';

interface Props {
  children: React.ReactNode;
}

export const HoverSwiper = ({ children }: Props) => {
  const sliderRef = useRef<SwiperClass>(null);
  const [isHover, setIsHover] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  const onSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const onSwiper = (swiper: SwiperClass) => {
    sliderRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative px-0 md:px-4" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <NavigationButton direction="prev" sliderRef={sliderRef} isVisible={isHover} disabled={isBeginning} />
      <Swiper
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
      >
        {children}
      </Swiper>
      <NavigationButton direction="next" sliderRef={sliderRef} isVisible={isHover} disabled={isEnd} />
    </div>
  );
};
