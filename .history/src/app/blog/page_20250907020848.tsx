'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

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
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background floating shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-cyan-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Blog & Resources
          </motion.h1>

          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                className="relative group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-lg hover:shadow-indigo-500/20 transition duration-500"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <time className="text-sm text-gray-400">{post.date}</time>

                {/* Glow Accent */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
