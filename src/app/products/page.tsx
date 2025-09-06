'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Premium Widget',
    price: '$29.99',
    description: 'High-quality widget for all your needs.',
    image: 'https://images.unsplash.com/photo-1581091215364-1c146285a72b?crop=entropy&cs=tinysrgb&fit=max&w=400&h=300',
  },
  {
    id: 2,
    title: 'Deluxe Gadget',
    price: '$49.99',
    description: 'Advanced gadget with premium features.',
    image: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf2?crop=entropy&cs=tinysrgb&fit=max&w=400&h=300',
  },
  {
    id: 3,
    title: 'Ultimate Tool',
    price: '$79.99',
    description: 'The ultimate tool for professionals.',
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&w=400&h=300',
  },
  {
    id: 4,
    title: 'Basic Accessory',
    price: '$19.99',
    description: 'Essential accessory for everyday use.',
    image: 'https://images.unsplash.com/photo-1581092580498-3b2c1d5c94c1?crop=entropy&cs=tinysrgb&fit=max&w=400&h=300',
  },
  {
    id: 5,
    title: 'Pro Package',
    price: '$99.99',
    description: 'Complete package for pro users.',
    image: 'https://images.unsplash.com/photo-1564869737193-0d63cd81e1a4?crop=entropy&cs=tinysrgb&fit=max&w=400&h=300',
  },
  {
    id: 6,
    title: 'Starter Kit',
    price: '$39.99',
    description: 'Perfect starter kit for beginners.',
    image: 'https://images.unsplash.com/photo-1593011953006-c7b4821ef4a0?crop=entropy&cs=tinysrgb&fit=max&w=400&h=300',
  },
];

export default function Products() {
  return (
    <>
      <Header />
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background abstract shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Products
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="relative group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition duration-500"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />

                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2 text-white">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-extrabold text-indigo-400">{product.price}</span>
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-500 hover:to-indigo-500 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Glow Accent */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
