import { useState, useEffect } from 'react';

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
  visibility: number;
  cloudiness: number;
  description: string;
  main: string;
  icon: string;
  windSpeed: number;
  windDegree: number;
  windGust?: number;
  rainVolume?: number;
  snowVolume?: number;
  sunrise: string;
  sunset: string;
  timezone: number;
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
        // const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1a4b940eda8ac8cabfee4d894c5cec06`);



        if (!response.ok) {
          throw new Error(`Failed to fetch weather for ${city}`);
        }

        const data = await response.json();

        const formatTime = (timestamp: number, offset: number) => {
          const date = new Date((timestamp + offset) * 1000);
          console.log(date);
            return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
                timeZone: 'UTC',          // <- IMPORTANT: prevents double offset
          });
        };

        setWeather({
          city: data.name,
          country: data.sys.country,
          temperature: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          tempMin: Math.round(data.main.temp_min),
          tempMax: Math.round(data.main.temp_max),
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          visibility: Math.round(data.visibility / 1000),
          cloudiness: data.clouds.all,
          description: data.weather[0].description,
          main: data.weather[0].main,
          icon: data.weather[0].icon,
          windSpeed: Math.round(data.wind.speed * 10) / 10,
          windDegree: data.wind.deg,
          windGust: data.wind.gust ? Math.round(data.wind.gust * 10) / 10 : undefined,
          rainVolume: data.rain?.['1h'],
          snowVolume: data.snow?.['1h'],
          sunrise: formatTime(data.sys.sunrise, data.timezone),
          sunset: formatTime(data.sys.sunset, data.timezone),
          timezone: data.timezone,
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
