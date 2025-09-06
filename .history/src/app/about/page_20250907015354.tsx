import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-lg text-gray-600 mb-12">
            We are a modern SaaS ecommerce platform dedicated to helping businesses thrive in the digital marketplace.
            Our mission is to provide cutting-edge tools and seamless experiences for online stores.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">To revolutionize ecommerce with innovative, user-friendly solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">Empower businesses of all sizes to succeed online with our platform.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">Innovation, integrity, and customer-centric solutions.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
