'use client';

import { useState } from 'react';
import { useWeather } from '@/hooks/use-weather';
import { ChevronLeft, ChevronRight, Droplets, Wind, Sunrise, Sunset } from 'lucide-react';

const RAJASTHAN_DISTRICTS = [
  { name: 'Jaipur', coordinates: { x: 50, y: 45 } },
  { name: 'Udaipur', coordinates: { x: 30, y: 70 } },
  { name: 'Jodhpur', coordinates: { x: 25, y: 50 } },
  { name: 'Jaisalmer', coordinates: { x: 15, y: 35 } },
  { name: 'Bikaner', coordinates: { x: 35, y: 25 } },
  { name: 'Ajmer', coordinates: { x: 40, y: 55 } },
  { name: 'Pushkar', coordinates: { x: 42, y: 52 } },
  { name: 'Kota', coordinates: { x: 60, y: 60 } },
  { name: 'Chittorgarh', coordinates: { x: 50, y: 65 } },
  { name: 'Bhilwara', coordinates: { x: 55, y: 70 } },
  { name: 'Rajsamand', coordinates: { x: 48, y: 72 } },
  { name: 'Pali', coordinates: { x: 35, y: 75 } },
  { name: 'Dungarpur', coordinates: { x: 40, y: 78 } },
  { name: 'Banswara', coordinates: { x: 50, y: 80 } },
  { name: 'Barmer', coordinates: { x: 20, y: 55 } },
  { name: 'Jalor', coordinates: { x: 28, y: 62 } },
];

export default function DistrictMapWeather() {
  const [selectedDistrict, setSelectedDistrict] = useState('Jaipur');
  const { weather, loading } = useWeather(selectedDistrict);

  const currentDistrict = RAJASTHAN_DISTRICTS.find(d => d.name === selectedDistrict);
  const districtIndex = RAJASTHAN_DISTRICTS.findIndex(d => d.name === selectedDistrict);

  const goToPrevious = () => {
    const newIndex = districtIndex === 0 ? RAJASTHAN_DISTRICTS.length - 1 : districtIndex - 1;
    setSelectedDistrict(RAJASTHAN_DISTRICTS[newIndex].name);
  };

  const goToNext = () => {
    const newIndex = districtIndex === RAJASTHAN_DISTRICTS.length - 1 ? 0 : districtIndex + 1;
    setSelectedDistrict(RAJASTHAN_DISTRICTS[newIndex].name);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">
          Explore Rajasthan Districts
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Discover weather and travel information for each district
        </p>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* LEFT: Map Section */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="relative w-full h-[300px] sm:h-[350px] flex items-center justify-center">
              {/* Map Background Image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F424e454243b04c6f886ba008656c7144%2Fd2054263e66e485c8d703902d74ad797?format=webp&width=800"
                alt="Rajasthan Districts Map"
                className="w-full h-full object-contain"
              />

              {/* City Name - Bottom Left Corner */}
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <h3 className="text-3xl sm:text-4xl font-serif text-primary drop-shadow-lg">
                  {selectedDistrict}
                </h3>
              </div>
            </div>

            {/* District List - Scrollable */}
            <div className="mt-4 w-full">
              <div className="grid grid-cols-3 gap-2">
                {RAJASTHAN_DISTRICTS.map((district) => (
                  <button
                    key={district.name}
                    onClick={() => setSelectedDistrict(district.name)}
                    className={`px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedDistrict === district.name
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {district.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Weather & Details Section */}
          <div className="w-full lg:w-3/5 bg-white rounded-2xl p-6 shadow-lg">
            {/* Header with Navigation */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <button
                onClick={goToPrevious}
                className="p-1.5 bg-gray-100 rounded-lg hover:bg-red-50 transition flex-shrink-0"
                aria-label="Previous district"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              <h3 className="text-2xl font-bold text-primary text-center flex-1 truncate">
                {selectedDistrict}
              </h3>

              <button
                onClick={goToNext}
                className="p-1.5 bg-gray-100 rounded-lg hover:bg-red-50 transition flex-shrink-0"
                aria-label="Next district"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Weather Section */}
            {loading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-20 bg-gray-200 rounded-lg"></div>
                <div className="grid grid-cols-4 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-16 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            ) : weather ? (
              <>
                {/* Main Weather Display */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* City Info */}
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        {weather.city}, {weather.country}
                      </p>
                      <p className="text-gray-700 capitalize font-medium">
                        {weather.description}
                      </p>
                    </div>

                    {/* Temperature */}
                    <div className="text-center">
                      <p className="text-5xl font-extrabold text-primary">
                        {weather.temperature}°C
                      </p>
                      <p className="text-xs text-gray-600 mt-1 font-medium">Current</p>
                    </div>
                  </div>
                </div>

                {/* Weather Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Temperature Details */}
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                    <p className="text-xs font-medium text-gray-600 mb-2">Feels Like</p>
                    <p className="text-2xl font-bold text-primary">{weather.feelsLike}°C</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                    <p className="text-xs font-medium text-gray-600 mb-2">Min / Max</p>
                    <p className="text-2xl font-bold text-primary">
                      {weather.tempMin}° / {weather.tempMax}°C
                    </p>
                  </div>

                  {/* Humidity */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                    <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-600">Humidity</p>
                      <p className="text-lg font-bold text-gray-800">{weather.humidity}%</p>
                    </div>
                  </div>

                  {/* Wind Speed */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                    <Wind className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-600">Wind Speed</p>
                      <p className="text-lg font-bold text-gray-800">{weather.windSpeed} m/s</p>
                    </div>
                  </div>

                  {/* Sunrise */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                    <Sunrise className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-600">Sunrise</p>
                      <p className="text-sm font-bold text-gray-800">{weather.sunrise}</p>
                    </div>
                  </div>

                  {/* Sunset */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                    <Sunset className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-600">Sunset</p>
                      <p className="text-sm font-bold text-gray-800">{weather.sunset}</p>
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <button className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                  Explore {selectedDistrict} →
                </button>
              </>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-700">Unable to load weather data</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
