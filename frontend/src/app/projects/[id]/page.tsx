import Image from 'next/image';
import { projects } from '@/data/projects';
import TechBadge from '@/components/projects/TechBadge';
import StatCard from '@/components/projects/StatCard';
import ClientProjectDetail from '@/components/projects/ClientProjectDetail';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === Number(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ClientProjectDetail project={project} />;
} 