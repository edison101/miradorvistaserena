'use client';

import { useTranslations } from 'next-intl';

export default function RecommendationsSection() {
  const t = useTranslations();

  const recommendations = [
    { icon: '☀️', key: 'weather', color: 'blue' },
    { icon: '👟', key: 'footwear', color: 'amber' },
    { icon: '🧴', key: 'sun', color: 'orange' },
    { icon: '☔', key: 'rain', color: 'cyan' },
    { icon: '🦟', key: 'insects', color: 'green' },
    { icon: '🦎', key: 'wildlife', color: 'emerald' },
  ];

  return (
    <section id="recommendations" className="w-full py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* Header - Compacto */}
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t('recommendations.title')}
            </h2>
            <p className="text-sm text-gray-600">
              {t('recommendations.subtitle')}
            </p>
          </div>

          {/* Recommendations - Grid Compacto */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {recommendations.map((item, index) => (
              <div
                key={item.key}
                className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-4 rounded-xl border border-${item.color}-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-semibold text-gray-800 text-xs leading-tight">
                    {t(`recommendations.${item.key}.title`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Note - Compacto */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-4 rounded-lg shadow-md animate-fade-in">
            <div className="flex items-start gap-2">
              <span className="text-lg">💡</span>
              <p className="text-xs text-amber-900 leading-relaxed">
                {t('recommendations.note')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
