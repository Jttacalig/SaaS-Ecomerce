'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-6 text-center rounded-lg shadow-lg mx-4 my-8">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Elevate Your Ecommerce Experience
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Build your online store with our modern, minimalistic SaaS platform.
      </motion.p>
      <motion.button
        className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:bg-indigo-50 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </section>
  );
}
