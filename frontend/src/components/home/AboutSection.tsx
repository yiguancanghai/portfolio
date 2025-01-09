'use client';

import { motion } from 'framer-motion';

const skills = [
  'AI Agents',
  'Web3',
  'Software Development',
  'LangChain',
  'Spring Boot',
  'React',
  'Next.js'
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#14161F] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a Computer Science Master's student passionate about AI technology, 
              Software Development, and Web3. My focus is on developing autonomous 
              agents and integrating AI solutions into real-world applications.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently exploring the intersection of AI agents, blockchain technology, 
              and software development, I'm building projects that combine these 
              cutting-edge technologies to create innovative solutions.
            </p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#1C1F2E] p-6 rounded-xl hover:bg-[#242838] transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">Experience</h3>
                <p className="text-purple-400 text-2xl font-bold">1 Year</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#1C1F2E] p-6 rounded-xl hover:bg-[#242838] transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">Projects</h3>
                <p className="text-purple-400 text-2xl font-bold">3 Projects</p>
              </motion.div>
            </motion.div>

            {/* Skills/Technologies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Key Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#1C1F2E] text-gray-300 px-4 py-2 rounded-full text-sm
                             hover:bg-[#242838] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 