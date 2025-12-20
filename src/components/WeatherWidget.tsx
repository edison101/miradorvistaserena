'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface WeatherData {
  temperature: string;
  condition: string;
  icon: string;
  humidity: string;
  windSpeed: string;
}

export default function WeatherWidget() {
  const t = useTranslations('weather');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch weather data from OpenWeatherMap API
    // Coordinates for Gibraltar, Norte de Santander area
    const fetchWeather = async () => {
      try {
        // Using coordinates close to Gibraltar, Norte de Santander
        const lat = 7.9833;
        const lon = -72.6833;
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';

        console.log('Weather API Key:', apiKey ? 'Present' : 'Missing');

        if (!apiKey) {
          // If no API key, show static fallback
          setWeather({
            temperature: '--°C',
            condition: 'Clima no disponible',
            icon: '🌤️',
            humidity: '--',
            windSpeed: '--',
          });
          setLoading(false);
          return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;
        console.log('Fetching weather from:', url);

        const response = await fetch(url);

        console.log('Weather API Response status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Weather API Error:', errorText);

          // If API key is invalid or not activated yet, show fallback
          if (response.status === 401) {
            console.warn('API key not activated yet. This can take up to 2 hours for new keys.');
          }

          throw new Error(`Weather fetch failed: ${response.status}`);
        }

        const data = await response.json();
        console.log('Weather data received:', data);

        // Map weather condition to emoji
        const getWeatherIcon = (code: number) => {
          if (code >= 200 && code < 300) return '⛈️'; // Thunderstorm
          if (code >= 300 && code < 400) return '🌦️'; // Drizzle
          if (code >= 500 && code < 600) return '🌧️'; // Rain
          if (code >= 600 && code < 700) return '❄️'; // Snow
          if (code >= 700 && code < 800) return '🌫️'; // Atmosphere
          if (code === 800) return '☀️'; // Clear
          if (code > 800) return '☁️'; // Clouds
          return '🌤️';
        };

        setWeather({
          temperature: `${Math.round(data.main.temp)}°C`,
          condition: data.weather[0].description,
          icon: getWeatherIcon(data.weather[0].id),
          humidity: `${data.main.humidity}%`,
          windSpeed: `${Math.round(data.wind.speed * 3.6)} km/h`,
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-lg p-4 backdrop-blur-sm border border-blue-700/50">
        <div className="flex items-center space-x-3">
          <div className="animate-pulse">
            <div className="h-10 w-10 bg-blue-600/50 rounded-full"></div>
          </div>
          <div className="flex-1 animate-pulse">
            <div className="h-4 bg-blue-600/50 rounded w-24 mb-2"></div>
            <div className="h-3 bg-blue-600/50 rounded w-32"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-lg p-5 backdrop-blur-sm border border-blue-500/50 hover:border-blue-400/70 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-5xl">🌤️</span>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">{t('title')}</h3>
              <p className="text-blue-200 text-sm mb-2">{t('location')}</p>
              <p className="text-gray-300 text-xs italic">⏳ {t('updating')}</p>
            </div>
          </div>
          <a
            href="https://weather.com/es-US/tiempo/hoy/l/05fb8f17783b32e638134b3a561d05774a0584057a0ccffc4c1a681d3225324f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 underline text-sm transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            {t('viewForecast')}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-lg p-4 backdrop-blur-sm border border-blue-600/50 hover:border-blue-500/70 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">{weather.icon}</span>
          <div>
            <p className="text-white font-bold text-2xl">{weather.temperature}</p>
            <p className="text-gray-300 text-xs capitalize">{weather.condition}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-300 text-xs">💧 {weather.humidity}</p>
          <p className="text-gray-300 text-xs">💨 {weather.windSpeed}</p>
        </div>
      </div>
      <a
        href="https://weather.com/es-US/tiempo/hoy/l/05fb8f17783b32e638134b3a561d05774a0584057a0ccffc4c1a681d3225324f"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-blue-200 text-xs underline mt-2 inline-block"
      >
        {t('viewForecast')} →
      </a>
    </div>
  );
}
