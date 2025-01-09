'use client';

import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  const { ref, controls } = useSectionInView();

  return (
    <motion.div
      id={id}
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className={`section ${className}`}
    >
      {children}
    </motion.div>
  );
} 