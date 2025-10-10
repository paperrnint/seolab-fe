'use client';

import { motion } from 'framer-motion';

import { defaultViewport, fadeInUp, fadeInUpFast, staggerContainer } from '@/constants';

type Faq = {
  q: string;
  a: string;
};

interface Props {
  faqs: Faq[];
}

export const Faq = ({ faqs }: Props) => {
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
          <h2 className="text-4xl font-bold text-primary mb-4">자주 묻는 질문</h2>
        </motion.div>

        <motion.div className="max-w-3xl mx-auto space-y-6" variants={staggerContainer}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl bg-bg-card shadow-default"
            >
              <h3 className="text-lg font-bold text-primary mb-2">Q. {faq.q}</h3>
              <p className="text-secondary">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
