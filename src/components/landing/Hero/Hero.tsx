'use client';

import { motion } from 'framer-motion';

import { HeroImage } from '../HeroImage/HeroImage';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* h1을 sticky로 고정 */}
        <motion.div
          className="sticky top-32 z-0 mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            책에서 만난
            <br />
            <span className="text-emp">나만의 문장</span>을<br />
            기록하세요
          </h1>
        </motion.div>

        {/* HeroImage는 스크롤에 따라 올라감 */}
        <HeroImage />

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            오래 기억하고 싶은 문장, 다시 읽고 싶은 구절을
            <br />
            도토리서랍에 차곡차곡 모아보세요
          </p>
        </motion.div>
      </div>
    </section>
  );
};
