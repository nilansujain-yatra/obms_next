'use client';

import { useState } from 'react';
import { useWeather } from '@/hooks/use-weather';
import { ChevronLeft, ChevronRight, Sunrise, Sunset } from 'lucide-react';

const RAJASTHAN_DISTRICTS = [
  { name: 'Jaipur', coordinates: { x: 50, y: 45 } },
  { name: 'Udaipur', coordinates: { x: 30, y: 70 } },
  { name: 'Jodhpur', coordinates: { x: 25, y: 50 } },
  { name: 'Jaisalmer', coordinates: { x: 18, y: 38 } },
  { name: 'Bikaner', coordinates: { x: 38, y: 28 } },
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

  const districtIndex = RAJASTHAN_DISTRICTS.findIndex(d => d.name === selectedDistrict);

  const goToPrevious = () => {
    const newIndex = districtIndex === 0
      ? RAJASTHAN_DISTRICTS.length - 1
      : districtIndex - 1;
    setSelectedDistrict(RAJASTHAN_DISTRICTS[newIndex].name);
  };

  const goToNext = () => {
    const newIndex = districtIndex === RAJASTHAN_DISTRICTS.length - 1
      ? 0
      : districtIndex + 1;
    setSelectedDistrict(RAJASTHAN_DISTRICTS[newIndex].name);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center">
          Magnificent Cities of Rajasthan
        </h2>

        <p className="text-center text-muted-foreground mb-8 text-sm sm:text-base">
            Each city possesses a distinct identity enriched with heritage,
          culture, traditions, and unique beauty of Rajasthan        </p>

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ✅ LEFT: MAP WITH DISTRICT HIGHLIGHT */}
          <div className="w-full lg:w-2.5/5 flex flex-col items-center justify-center rounded-2xl p-6">
            <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center">

              {/* Map */}
              <img
                src="/images/map.png"
                alt="Rajasthan Districts Map"
                className="w-full h-full object-contain"
              />

              {/* ✅ CLICKABLE DISTRICT MARKERS */}
              {RAJASTHAN_DISTRICTS.map((district) => {
                const isActive = selectedDistrict === district.name;

                return (
                  <button
                    key={district.name}
                    onClick={() => setSelectedDistrict(district.name)}
                    className={`
                      absolute w-2 h-2 rounded-full transition-all
                      ${isActive ? 'bg-red-600 scale-125 ring-4 ring-red-400' : 'bg-gray-400'}
                    `}
                    style={{
                      left: `${district.coordinates.x}%`,
                      top: `${district.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    aria-label={district.name}
                  />
                );
              })}

              {/* ✅ SELECTED DISTRICT LABEL */}
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <h3 className="text-3xl sm:text-5xl font-serif text-primary font-bold drop-shadow-lg">
                  {selectedDistrict}
                </h3>
              </div>
            </div>
          </div>

          {/* ✅ RIGHT: WEATHER */}
          <div className="w-full lg:w-2.5/5 bg-white rounded-2xl p-6 shadow-lg">

            {/* HEADER WITH NAVIGATION */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <button onClick={goToPrevious}
                className="p-1.5 bg-gray-100 rounded-lg hover:bg-red-50 transition">
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              <h3 className="text-2xl font-bold text-primary text-center flex-1 truncate">
                {selectedDistrict}
              </h3>

              <button onClick={goToNext}
                className="p-1.5 bg-gray-100 rounded-lg hover:bg-red-50 transition">
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* WEATHER */}
            {loading ? (
              <div className="h-24 bg-gray-200 rounded-lg animate-pulse" />
            ) : weather ? (
              <>
               <div className="bg-[#FDF3F3] rounded-lg p-4 mb-4 flex items-center justify-between">

                    {/* ✅ LEFT: City + Description */}
                    <div className="text-left">
                      <p className="text-xs text-gray-600">
                        {weather.city}, {weather.country}
                      </p>
                      <p className="text-gray-700 capitalize font-medium text-sm">
                        {weather.description}
                      </p>
                    </div>

                    {/* ✅ CENTER: Temperature */}
                    <div className="flex-1 text-center">
                      <p className="text-4xl font-bold text-primary leading-none">
                        {weather.temperature}°C
                      </p>
                      <p className="text-xs text-gray-600 mt-1 font-medium">Current</p>
                    </div>

                    {/* ✅ RIGHT: Humidity */}
                    <div className="text-right">
                      <p className="text-xs text-gray-600 font-medium">Humidity</p>
                      <p className="text-lg font-bold text-accent">
                        {weather.humidity}%
                      </p>
                    </div>

                  </div>


                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white border rounded-lg p-3 text-center">
                    <Sunrise className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-xs font-bold">{weather.sunrise}</p>
                  </div>

                  <div className="bg-white border rounded-lg p-3 text-center">
                    <Sunset className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                    <p className="text-xs font-bold">{weather.sunset}</p>
                  </div>

                  <div className="bg-white border rounded-lg p-3 text-center">
                    <p className="text-xs font-medium">Min / Max</p>
                    <p className="text-sm font-bold">
                      {weather.tempMin}° / {weather.tempMax}°
                    </p>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold"
                onClick={() => window.location.href = `http://10.70.235.180:30201/citydetail/${selectedDistrict}`}>
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
