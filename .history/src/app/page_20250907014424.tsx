import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import PricingPlans from './components/PricingPlans';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <PricingPlans />
      <Features />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}
