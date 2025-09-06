import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      'Basic Analytics'
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
      'Advanced Integrations'
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
      '24/7 Phone Support'
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Choose Your Plan</h1>
          <p className="text-lg text-gray-600 mb-12">Select the perfect plan for your business needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.id} className={`bg-white rounded-lg shadow-md p-8 ${plan.popular ? 'border-2 border-indigo-500' : ''}`}>
                {plan.popular && <div className="bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>}
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-2">{plan.price}<span className="text-lg font-normal">/{plan.period}</span></div>
                <ul className="text-left mb-8 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-md font-semibold transition ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
