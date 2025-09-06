import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  { id: 1, title: 'Premium Widget', price: '$29.99', description: 'High-quality widget for all your needs.', image: '/placeholder.jpg' },
  { id: 2, title: 'Deluxe Gadget', price: '$49.99', description: 'Advanced gadget with premium features.', image: '/placeholder.jpg' },
  { id: 3, title: 'Ultimate Tool', price: '$79.99', description: 'The ultimate tool for professionals.', image: '/placeholder.jpg' },
  { id: 4, title: 'Basic Accessory', price: '$19.99', description: 'Essential accessory for everyday use.', image: '/placeholder.jpg' },
  { id: 5, title: 'Pro Package', price: '$99.99', description: 'Complete package for pro users.', image: '/placeholder.jpg' },
  { id: 6, title: 'Starter Kit', price: '$39.99', description: 'Perfect starter kit for beginners.', image: '/placeholder.jpg' },
];

export default function Products() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
