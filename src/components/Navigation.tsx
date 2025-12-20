'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('nav');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/nosotros', label: t('about') },
    { href: '/menu', label: t('menu') },
    { href: '/eventos', label: t('specialEvents') },
    { href: '/picnic', label: t('picnic') },
    { href: '/camping', label: t('camping') },
    { href: '/galeria', label: t('gallery') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 md:h-20">
          {/* Mobile Layout: Menu Button (left) + Language Selector (right) */}
          <div className="flex items-center justify-between w-full md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                scrolled
                  ? 'text-gray-800 hover:text-green-600'
                  : 'text-white hover:text-green-300'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <LanguageSelector scrolled={scrolled} />
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium text-lg ${
                  scrolled
                    ? 'text-gray-800 hover:text-green-600'
                    : 'text-white hover:text-green-300 drop-shadow-lg'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSelector scrolled={scrolled} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-b-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-green-600 transition-colors font-medium py-2 px-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
