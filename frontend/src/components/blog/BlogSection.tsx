'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, blogApi } from '@/services/api';
import { useApi } from '@/hooks/useApi';

export default function BlogSection() {
  const { data: posts = [], loading, error } = useApi<BlogPost[]>(() => blogApi.getAllPosts());

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600 py-8">
            Failed to load blog posts. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Technical articles and tutorials
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(posts) && posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl || '/images/default-blog.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString()}
                    </time>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {post.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 