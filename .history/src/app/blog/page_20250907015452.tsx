import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const posts = [
  {
    id: 1,
    title: 'How to Boost Your Ecommerce Sales in 2025',
    excerpt: 'Discover the latest strategies to increase your online store revenue and customer engagement.',
    date: 'March 15, 2025',
  },
  {
    id: 2,
    title: 'Top 10 SaaS Tools for Ecommerce Businesses',
    excerpt: 'A curated list of essential SaaS tools to streamline your ecommerce operations.',
    date: 'April 2, 2025',
  },
  {
    id: 3,
    title: 'Design Trends for Modern SaaS Websites',
    excerpt: 'Explore the newest design trends that make SaaS websites stand out in 2025.',
    date: 'April 20, 2025',
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Blog & Resources</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <time className="text-sm text-gray-400">{post.date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
