'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          SaaS Ecommerce
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
          <Link href="/products" className="text-gray-700 hover:text-indigo-600 transition">Products</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 transition">Pricing</Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
          <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition">Blog</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-6 py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-indigo-600 transition">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-indigo-600 transition">About</Link>
            <Link href="/products" className="block text-gray-700 hover:text-indigo-600 transition">Products</Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-indigo-600 transition">Pricing</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-indigo-600 transition">Contact</Link>
            <Link href="/blog" className="block text-gray-700 hover:text-indigo-600 transition">Blog</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
