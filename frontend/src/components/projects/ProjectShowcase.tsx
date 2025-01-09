'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Exploring the intersection of AI, Blockchain, and Data Science
          </p>
        </div>

        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </m.div>
          </AnimatePresence>
        </LazyMotion>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-12">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
} 