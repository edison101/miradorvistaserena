'use client';

import { useTranslations } from 'next-intl';

export default function HoursSection() {
  const t = useTranslations();

  const openDays = [
    { day: t('schedule.thursday'), hours: '10:30 AM - 8:30 PM' },
    { day: t('schedule.friday'), hours: '10:30 AM - 8:30 PM' },
    { day: t('schedule.saturday'), hours: '10:30 AM - 8:30 PM' },
    { day: t('schedule.sunday'), hours: '10:30 AM - 8:30 PM' },
    { day: t('schedule.monday'), hours: '10:30 AM - 8:30 PM' },
  ];

  const closedDays = [
    { day: t('schedule.tuesday'), hours: t('schedule.closed') },
    { day: t('schedule.wednesday'), hours: t('schedule.closed') },
  ];

  return (
    <section id="hours" className="w-full py-16 bg-pattern">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in">

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              {t('schedule.title')}
            </h2>

            {/* Open Days */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-700 mb-6 text-center">{t('hours.openDays')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {openDays.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-4 px-6 rounded-lg transition-all duration-300 animate-fade-in bg-white border-l-4 border-green-500 hover:shadow-md hover:translate-x-1 ${
                      index === openDays.length - 1 && openDays.length % 2 !== 0 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      {item.day}
                    </span>
                    <span className="text-base font-medium text-green-600">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closed Days */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-500 mb-6 text-center">{t('hours.closedDays')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {closedDays.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 px-6 rounded-lg transition-all duration-300 animate-fade-in bg-gray-50 border-l-4 border-gray-300"
                    style={{ animationDelay: `${(openDays.length + index) * 50}ms` }}
                  >
                    <span className="text-lg font-semibold text-gray-400">
                      {item.day}
                    </span>
                    <span className="text-base font-medium text-gray-400">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Contact */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <p className="text-gray-600 mb-4 text-lg">
                {t('hours.reservations')}
              </p>
              <a
                href="tel:+573229537651"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +57 322 953 7651
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
