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
    <section className="py-16 px-6 bg-gray-50 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 cursor-pointer" onClick={() => toggle(index)}>
            <motion.h3
              className="text-xl font-semibold flex justify-between items-center"
              initial={false}
              animate={{ color: openIndex === index ? '#6366f1' : '#111827' }}
            >
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </motion.h3>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
