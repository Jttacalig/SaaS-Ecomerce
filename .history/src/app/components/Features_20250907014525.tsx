'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: '🚀',
    title: 'Fast Performance',
    description: 'Lightning-fast loading times for optimal user experience.',
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Secure Payments',
    description: 'Industry-standard security for all transactions.',
  },
  {
    id: 3,
    icon: '📱',
    title: 'Mobile Responsive',
    description: 'Perfect on all devices, from desktop to mobile.',
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Customizable Design',
    description: 'Tailor your store to match your brand perfectly.',
  },
];

export default function Features() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
