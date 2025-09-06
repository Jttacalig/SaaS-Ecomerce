'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: '$19',
    features: ['1 Store', 'Basic Support', 'All Core Features'],
  },
  {
    id: 2,
    name: 'Pro',
    price: '$49',
    features: ['5 Stores', 'Priority Support', 'Advanced Analytics'],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$99',
    features: ['Unlimited Stores', 'Dedicated Support', 'Custom Integrations'],
  },
];

export default function PricingPlans() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 text-white rounded-lg shadow-lg p-8 flex-1 max-w-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}/mo</p>
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="before:content-['✓'] before:text-green-400 before:mr-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-full hover:bg-indigo-50 transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
