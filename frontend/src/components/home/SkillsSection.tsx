'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API', 'Scikit-learn']
  },
  {
    category: 'Blockchain & Web3',
    items: ['Ethereum', 'Web3.py', 'Solidity', 'Smart Contracts', 'DeFi Protocols']
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript/TypeScript', 'Solidity', 'SQL', 'Rust']
  },
  {
    category: 'Tools & Frameworks',
    items: ['Next.js', 'React', 'Docker', 'Git', 'PostgreSQL']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
          style={{ display: 'block' }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
              style={{ display: 'block' }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <motion.li
                    key={skill}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
          style={{ display: 'block' }}
        >
          <a
            href="/resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg
                     hover:bg-indigo-700 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
} 