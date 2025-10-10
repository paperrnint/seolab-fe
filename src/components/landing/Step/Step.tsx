'use client';

import { motion } from 'framer-motion';

import { defaultViewport, fadeInUpFast, scaleIn, staggerContainer } from '@/constants';

type Step = {
  step: string;
  title: string;
  desc: string;
};

interface Props {
  steps: Step[];
}

export const Step = ({ steps }: Props) => {
  return (
    <motion.section
      className="py-30 px-6 bg-bg-body"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={fadeInUpFast}>
          <h2 className="text-4xl font-bold text-primary mb-4">간단한 3단계</h2>
          <p className="text-xl text-secondary">지금 바로 시작해보세요</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer}>
          {steps.map((item, index) => (
            <motion.div key={index} className="text-center" variants={scaleIn}>
              <div className="w-16 h-16 bg-emp rounded-full flex items-center justify-center mx-auto mb-6 text-text-btn text-2xl font-bold shadow-default">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
