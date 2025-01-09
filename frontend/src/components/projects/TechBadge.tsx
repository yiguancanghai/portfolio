interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  const getColorClass = (tech: string) => {
    const colors: { [key: string]: string } = {
      Python: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Web3.py': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      LangChain: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      PostgreSQL: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      TensorFlow: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      Docker: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'OpenAI API': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      'GitHub API': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    };
    return colors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <span
      className={`px-3 py-1 text-sm rounded-full ${getColorClass(tech)} 
                 transition-all duration-300 hover:scale-105`}
    >
      {tech}
    </span>
  );
} 