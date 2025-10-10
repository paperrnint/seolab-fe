'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { defaultViewport, fadeInUp, fadeInUpFast, staggerContainer } from '@/constants';

type Feature = {
  icon: React.JSX.Element;
  title: string;
  description: string;
  image: string;
};

interface Props {
  features: Feature[];
}

export const Feature = ({ features }: Props) => {
  return (
    <motion.section
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={fadeInUpFast}>
          <h2 className="text-4xl font-bold text-primary mb-4">당신의 독서를 더 의미있게</h2>
          <p className="text-xl text-secondary">도토리서랍이 제공하는 특별한 기능들</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group overflow-hidden rounded-2xl bg-bg-card shadow-default hover:border-subtle transition-all"
            >
              <div className="relative aspect-video overflow-hidden m-4 mb-0 rounded-xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 컨텐츠 영역 */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-secondary">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                </div>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
