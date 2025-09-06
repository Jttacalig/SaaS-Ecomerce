import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Header />
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We are a modern SaaS ecommerce platform dedicated to helping businesses
            thrive in the digital marketplace. Our mission is to provide
            cutting-edge tools and seamless experiences for online stores.
          </motion.p>

          {/* Cards Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {[
              {
                title: 'Our Vision',
                desc: 'To revolutionize ecommerce with innovative, user-friendly solutions.',
              },
              {
                title: 'Our Mission',
                desc: 'Empower businesses of all sizes to succeed online with our platform.',
              },
              {
                title: 'Our Values',
                desc: 'Innovation, integrity, and customer-centric solutions.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition duration-500"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>

                {/* Glow Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
