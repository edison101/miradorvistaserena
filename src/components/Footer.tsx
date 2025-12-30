'use client';

import { useTranslations } from 'next-intl';
import WeatherWidget from './WeatherWidget';

export default function Footer() {
  const t = useTranslations('footer');
  const tContact = useTranslations('contact');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Weather Widget - Full Width */}
        <div className="mb-8">
          <WeatherWidget />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Mirador Vista Serena</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {tContact('address')}
            </p>
            <p className="text-gray-400 text-xs mt-2 italic">
            Entre Cubará, Boyacá y Gibraltar, Norte de Santander
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{tContact('title')}</h3>
            <div className="space-y-3 inline-block text-left">
              <a
                href="tel:+573229537651"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">+57 322 953 7651</span>
              </a>

              <a
                href="https://www.facebook.com/MvistaSerena/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/mvistaserena?igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm">Instagram</span>
              </a>

              <a
                href="https://maps.app.goo.gl/DL7c2nhmw43btds88"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{tContact('location')}</span>
              </a>
            </div>
          </div>

          {/* Calidad y Normas */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">{t('qualityCommitment')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>{t('hygieneStandards')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>{t('freshFood')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>{t('naturalProducts')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>{t('safeEnvironment')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} Mirador Vista Serena® - {t('rights')}
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>{t('madeBy')}</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>{t('by')}</span>
              <a
                href="https://www.bytsesolutions.com/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-400 hover:text-green-300 transition-colors"
              >
                BYTSE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}