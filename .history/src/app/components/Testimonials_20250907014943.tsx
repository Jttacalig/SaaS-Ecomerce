'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'CEO, Startup Inc.',
    quote: 'This platform transformed our ecommerce business. Highly recommend!',
    avatar: '/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Mark Smith',
    role: 'Founder, Tech Solutions',
    quote: 'The clean design and ease of use are unmatched.',
    avatar: '/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Sara Lee',
    role: 'Product Manager, Retail Co.',
    quote: 'Our sales increased significantly after switching to this platform.',
    avatar: '/avatar3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg p-6 shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
