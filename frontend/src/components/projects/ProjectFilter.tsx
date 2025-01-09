'use client';

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
          selectedCategory === 'all'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Projects
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 