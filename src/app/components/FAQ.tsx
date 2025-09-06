'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How do I get started?',
    answer: 'Simply sign up and start adding your products to your store.',
  },
  {
    question: 'Can I customize the design?',
    answer: 'Yes, our platform offers customizable themes and layouts.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'We offer a 14-day free trial with full access to all features.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach out to our support team via the contact form below.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-cyan-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 cursor-pointer shadow-lg hover:shadow-indigo-500/20 transition duration-500"
              onClick={() => toggle(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3
                className="text-xl font-semibold flex justify-between items-center text-white"
                animate={{ color: openIndex === index ? '#6366f1' : '#ffffff' }}
              >
                {faq.question}
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </motion.h3>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-4 text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
