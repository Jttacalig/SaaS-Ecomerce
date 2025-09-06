'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'CEO, Startup Inc.',
    quote: 'This platform transformed our ecommerce business. Highly recommend!',
    avatar:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 2,
    name: 'Mark Smith',
    role: 'Founder, Tech Solutions',
    quote: 'The clean design and ease of use are unmatched.',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=faces&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 3,
    name: 'Sara Lee',
    role: 'Product Manager, Retail Co.',
    quote:
      'Our sales increased significantly after switching to this platform.',
    avatar:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Customers Say
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition duration-500"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="italic text-gray-200 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-400/50 shadow-md"
                />
                <div className="text-left">
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Glow Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
