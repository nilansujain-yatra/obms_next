import { useState, useEffect } from 'react';

export interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  description: string;
  icon: string;
  feelsLike: number;
  windSpeed: number;
}

export function useWeather(city: string) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        if (!apiKey) {
          throw new Error('OpenWeatherMap API key is not configured');
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch weather for ${city}`);
        }

        const data = await response.json();
        setWeather({
          city: data.name,
          temperature: Math.round(data.main.temp),
          humidity: data.main.humidity,
          description: data.weather[0].main,
          icon: data.weather[0].icon,
          feelsLike: Math.round(data.main.feels_like),
          windSpeed: Math.round(data.wind.speed),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
}
