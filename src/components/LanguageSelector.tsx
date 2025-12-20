'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

interface LanguageSelectorProps {
  scrolled?: boolean;
}

export default function LanguageSelector({ scrolled = false }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('es');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1];
    setCurrentLocale(cookieLocale || 'es');
  }, []);

  const handleLanguageChange = (langCode: string) => {
    // Set cookie
    document.cookie = `NEXT_LOCALE=${langCode}; path=/; max-age=31536000`;
    setCurrentLocale(langCode);
    setIsOpen(false);
    // Refresh page to apply new language
    router.refresh();
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="relative">
        <button
          className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
            scrolled
              ? 'hover:bg-gray-100'
              : 'hover:bg-white/20'
          }`}
          aria-label="Select language"
        >
          <span className="text-2xl">🇪🇸</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
          scrolled
            ? 'hover:bg-gray-100'
            : 'hover:bg-white/20'
        }`}
        aria-label="Select language"
      >
        <span className="text-2xl">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                  currentLocale === lang.code ? 'bg-green-50' : ''
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="text-sm font-medium text-gray-800">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
