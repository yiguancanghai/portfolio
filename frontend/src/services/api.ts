import { fetchApi } from '@/utils/api-client';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  categories: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  summary: string;
  publishedDate: string;
  tags: string[];
  imageUrl: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export const projectApi = {
  getAllProjects: () => fetchApi<Project[]>('/projects'),
  getFeaturedProjects: () => fetchApi<Project[]>('/projects/featured'),
  getProjectById: (id: number) => fetchApi<Project>(`/projects/${id}`),
};

export const blogApi = {
  getAllPosts: () => fetchApi<BlogPost[]>('/blog'),
  getPostById: (id: number) => fetchApi<BlogPost>(`/blog/${id}`),
  searchPosts: (keyword: string) => fetchApi<BlogPost[]>(`/blog/search?keyword=${keyword}`),
};

export const contactApi = {
  sendMessage: (message: ContactMessage) =>
    fetchApi('/contact', {
      method: 'POST',
      body: JSON.stringify(message),
    }),
}; 