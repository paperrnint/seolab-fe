'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -1]);

  return (
    <div ref={containerRef} className="mt-16">
      <motion.div
        className="rounded-2xl overflow-hidden shadow-strong border-4 border-bg-card max-w-4xl mx-auto"
        style={{ y }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-bg-panel aspect-video flex items-center justify-center">
          <Image src="/landing/hero.webp" alt="hero image" width={1024} height={400} priority />
        </div>
      </motion.div>
    </div>
  );
}
