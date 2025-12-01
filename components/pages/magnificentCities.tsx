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
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">--</p>
                    <p className="text-xs text-muted-foreground">Avg Temp</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">--</p>
                    <p className="text-xs text-muted-foreground">Humidity</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">
                      {currentCity.avgCost}
                    </p>
                    <p className="text-xs text-muted-foreground">Avg Cost</p>
                  </div>
                </div>
              ) : weather ? (
                <>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">
                        {weather.temperature}°C
                      </p>
                      <p className="text-xs text-muted-foreground">Avg Temp</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">
                        {weather.humidity}%
                      </p>
                      <p className="text-xs text-muted-foreground">Humidity</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">
                        {currentCity.avgCost}
                      </p>
                      <p className="text-xs text-muted-foreground">Avg Cost</p>
                    </div>
                  </div>

                  {/* Additional Weather Details */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Cloud className="w-5 h-5 text-blue-600" />
                      <p className="font-semibold text-gray-700">
                        {weather.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600">
                          Feels like {weather.feelsLike}°C
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600">
                          Wind {weather.windSpeed} m/s
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

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
