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
            Gibraltar, Norte de Santander
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