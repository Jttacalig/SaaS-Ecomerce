'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

const products = [
  { id: 1, title: 'Premium Widget', price: '$29.99', image: '/placeholder.jpg' },
  { id: 2, title: 'Deluxe Gadget', price: '$49.99', image: '/placeholder.jpg' },
  { id: 3, title: 'Ultimate Tool', price: '$79.99', image: '/placeholder.jpg' },
  { id: 4, title: 'Basic Accessory', price: '$19.99', image: '/placeholder.jpg' },
];

export default function ProductShowcase() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-indigo-600 font-bold mb-4">{product.price}</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
