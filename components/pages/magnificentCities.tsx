'use client';

import { useState } from 'react';
import { useWeather } from '@/hooks/use-weather';
import { ChevronLeft, ChevronRight, Cloud, Droplets, Wind, Eye, Gauge, Compass, Sunrise, Sunset, CloudRain } from 'lucide-react';

const RAJASTHAN_CITIES = [
  {
    name: 'Jaipur',
    description:
      'The City Palace, Jantar Mantar, Hawa Mahal and other magnificent structures showcase the city\'s royal legacy.',
    avgCost: '₹3K',
  },
  {
    name: 'Udaipur',
    description:
      'The Venice of the East, Udaipur is known for its beautiful lakes, palaces, and serene backwaters.',
    avgCost: '₹3.5K',
  },
  {
    name: 'Jodhpur',
    description:
      'The Blue City, famous for its stunning Mehrangarh Fort and intricate blue-painted houses.',
    avgCost: '₹2.5K',
  },
  {
    name: 'Jaisalmer',
    description:
      'The Golden City, an enchanting desert destination with magnificent havelis and camel safaris.',
    avgCost: '₹2K',
  },
  {
    name: 'Pushkar',
    description:
      'A sacred pilgrimage site with the famous Pushkar Camel Fair and the holy Pushkar Lake.',
    avgCost: '₹1.5K',
  },
  {
    name: 'Bikaner',
    description:
      'Known for its grand Junagarh Fort and traditional Rajasthani culture with delicious snacks.',
    avgCost: '₹2K',
  },
];

export default function MagnificientCities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCity = RAJASTHAN_CITIES[currentIndex];
  const { weather, loading } = useWeather(currentCity.name);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? RAJASTHAN_CITIES.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === RAJASTHAN_CITIES.length - 1 ? 0 : prev + 1
    );
  };

  const goToCity = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 sm:py-10 px-4 bg-red-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center">
          Magnificent Cities of Rajasthan
        </h3>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Each city possesses a distinct identity enriched with heritage,
          culture, traditions, and unique beauty of Rajasthan
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="h-96 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center text-center">
            <div>
              <p className="text-6xl mb-4">🗺️</p>
              <p className="text-muted-foreground">Interactive Map</p>
            </div>
          </div>

          {/* City Info */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h4 className="text-2xl font-bold text-primary mb-4">
                {currentCity.name}
              </h4>

              {/* Weather Info */}
              {loading ? (
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center animate-pulse">
                      <p className="text-2xl font-bold text-accent">--</p>
                      <p className="text-xs text-muted-foreground">Temperature</p>
                    </div>
                    <div className="text-center animate-pulse">
                      <p className="text-2xl font-bold text-accent">--</p>
                      <p className="text-xs text-muted-foreground">Humidity</p>
                    </div>
                    <div className="text-center animate-pulse">
                      <p className="text-2xl font-bold text-accent">--</p>
                      <p className="text-xs text-muted-foreground">Wind</p>
                    </div>
                  </div>
                </div>
              ) : weather ? (
                <>
                  {/* Main Weather Display */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          {weather.city}, {weather.country}
                        </p>
                        <p className="text-3xl font-bold text-primary">
                          {weather.temperature}°C
                        </p>
                        <p className="text-gray-700 capitalize font-medium">
                          {weather.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Feels Like</p>
                        <p className="text-2xl font-bold text-accent">
                          {weather.feelsLike}°C
                        </p>
                      </div>
                    </div>

                    {/* Temperature Range */}
                    <div className="flex gap-4 text-sm mb-4 pt-4 border-t border-blue-200">
                      <div>
                        <p className="text-gray-600">Min Temp</p>
                        <p className="font-semibold text-gray-800">
                          {weather.tempMin}°C
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Max Temp</p>
                        <p className="font-semibold text-gray-800">
                          {weather.tempMax}°C
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Weather Details Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {/* Humidity */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                      <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Humidity</p>
                        <p className="text-lg font-bold text-gray-800">
                          {weather.humidity}%
                        </p>
                      </div>
                    </div>

                    {/* Wind Speed */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                      <Wind className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Wind Speed</p>
                        <p className="text-lg font-bold text-gray-800">
                          {weather.windSpeed} m/s
                        </p>
                      </div>
                    </div>

                    {/* Pressure */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                      <Gauge className="w-6 h-6 text-orange-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Pressure</p>
                        <p className="text-lg font-bold text-gray-800">
                          {weather.pressure} hPa
                        </p>
                      </div>
                    </div>

                    {/* Visibility */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                      <Eye className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Visibility</p>
                        <p className="text-lg font-bold text-gray-800">
                          {weather.visibility} km
                        </p>
                      </div>
                    </div>

                    {/* Cloud Coverage */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                      <Cloud className="w-6 h-6 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Cloudiness</p>
                        <p className="text-lg font-bold text-gray-800">
                          {weather.cloudiness}%
                        </p>
                      </div>
                    </div>

                    {/* Wind Direction */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                      <Compass className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Wind Direction</p>
                        <p className="text-lg font-bold text-gray-800">
                          {weather.windDegree}°
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sun Times */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                      <Sunrise className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Sunrise</p>
                        <p className="text-sm font-bold text-gray-800">
                          {weather.sunrise}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                      <Sunset className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Sunset</p>
                        <p className="text-sm font-bold text-gray-800">
                          {weather.sunset}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rain/Snow if available */}
                  {(weather.rainVolume || weather.windGust) && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {weather.windGust && (
                        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                          <Wind className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-muted-foreground">Wind Gust</p>
                            <p className="text-lg font-bold text-gray-800">
                              {weather.windGust} m/s
                            </p>
                          </div>
                        </div>
                      )}

                      {weather.rainVolume && (
                        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                          <CloudRain className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-muted-foreground">Rain (1h)</p>
                            <p className="text-lg font-bold text-gray-800">
                              {weather.rainVolume} mm
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : null}

              {!loading && !weather && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-yellow-700">Weather data is loading...</p>
                </div>
              )}

              <p className="text-sm text-muted-foreground mb-4">
                {currentCity.description}
              </p>
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                Explore {currentCity.name}
              </button>
            </div>

            {/* City Slider Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="p-2 bg-white rounded-lg shadow-md hover:bg-red-50 transition"
                aria-label="Previous city"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>

              {/* City Indicators */}
              <div className="flex-1 flex gap-2 justify-center overflow-x-auto">
                {RAJASTHAN_CITIES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCity(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to ${RAJASTHAN_CITIES[index].name}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 bg-white rounded-lg shadow-md hover:bg-red-50 transition"
                aria-label="Next city"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>

            {/* City Labels under slider */}
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-primary">
                {currentIndex + 1} / {RAJASTHAN_CITIES.length} Cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
