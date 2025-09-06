"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: '$19',
    period: 'month',
    features: [
      '1 Store',
      'Basic Support',
      'All Core Features',
      'Email Integration',
      'Basic Analytics',
    ],
  },
  {
    id: 2,
    name: 'Pro',
    price: '$49',
    period: 'month',
    features: [
      '5 Stores',
      'Priority Support',
      'Advanced Analytics',
      'Custom Domain',
      'API Access',
      'Advanced Integrations',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$99',
    period: 'month',
    features: [
      'Unlimited Stores',
      'Dedicated Support',
      'Custom Integrations',
      'White-label Solution',
      'Advanced Security',
      '24/7 Phone Support',
    ],
  },
];

export default function Pricing() {
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
            className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Choose Your Plan
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Select the perfect plan for your business needs
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`relative group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-indigo-500/20 transition duration-500`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 }}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {plan.name}
                </h3>

                <div className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-300">/{plan.period}</span>
                </div>

                <ul className="text-left mb-8 space-y-2 text-gray-200">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold text-lg transition 
                  ${plan.popular 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-indigo-500' 
                    : 'bg-gray-700/30 text-white hover:bg-gray-600/50'}`}
                >
                  Choose Plan
                </button>

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
