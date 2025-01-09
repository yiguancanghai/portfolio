'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: number;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
        <div className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
          {value.toLocaleString()}
        </div>
      </m.div>
    </LazyMotion>
  );
} 