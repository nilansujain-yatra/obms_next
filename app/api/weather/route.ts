import { NextRequest, NextResponse } from 'next/server';

const mockWeatherData: Record<string, any> = {
  Jaipur: {
    coord: { lon: 75.8245, lat: 26.9124 },
    weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
    main: {
      temp: 28,
      feels_like: 30,
      temp_min: 24,
      temp_max: 32,
      pressure: 1008,
      humidity: 65,
    },
    visibility: 8000,
    wind: { speed: 5.5, deg: 240, gust: 8.2 },
    rain: { '1h': 2.5 },
    clouds: { all: 45 },
    sys: {
      country: 'IN',
      sunrise: 1704067800,
      sunset: 1704109200,
    },
    timezone: 19800,
    name: 'Jaipur',
  },
  Udaipur: {
    coord: { lon: 73.7126, lat: 24.5854 },
    weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
    main: {
      temp: 26,
      feels_like: 27,
      temp_min: 22,
      temp_max: 30,
      pressure: 1010,
      humidity: 58,
    },
    visibility: 10000,
    wind: { speed: 4.2, deg: 180 },
    clouds: { all: 35 },
    sys: {
      country: 'IN',
      sunrise: 1704068400,
      sunset: 1704109800,
    },
    timezone: 19800,
    name: 'Udaipur',
  },
  Jodhpur: {
    coord: { lon: 73.1812, lat: 26.2389 },
    weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
    main: {
      temp: 32,
      feels_like: 35,
      temp_min: 28,
      temp_max: 36,
      pressure: 1005,
      humidity: 42,
    },
    visibility: 10000,
    wind: { speed: 6.8, deg: 270, gust: 10.5 },
    clouds: { all: 20 },
    sys: {
      country: 'IN',
      sunrise: 1704069000,
      sunset: 1704110400,
    },
    timezone: 19800,
    name: 'Jodhpur',
  },
  Jaisalmer: {
    coord: { lon: 70.9142, lat: 26.9124 },
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
    main: {
      temp: 30,
      feels_like: 33,
      temp_min: 26,
      temp_max: 34,
      pressure: 1003,
      humidity: 35,
    },
    visibility: 10000,
    wind: { speed: 7.2, deg: 290 },
    clouds: { all: 5 },
    sys: {
      country: 'IN',
      sunrise: 1704069600,
      sunset: 1704110800,
    },
    timezone: 19800,
    name: 'Jaisalmer',
  },
  Pushkar: {
    coord: { lon: 74.5588, lat: 26.4894 },
    weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
    main: {
      temp: 25,
      feels_like: 26,
      temp_min: 21,
      temp_max: 29,
      pressure: 1012,
      humidity: 70,
    },
    visibility: 7000,
    wind: { speed: 3.8, deg: 220 },
    rain: { '1h': 1.8 },
    clouds: { all: 60 },
    sys: {
      country: 'IN',
      sunrise: 1704067200,
      sunset: 1704108600,
    },
    timezone: 19800,
    name: 'Pushkar',
  },
  Bikaner: {
    coord: { lon: 73.3119, lat: 28.0229 },
    weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
    main: {
      temp: 29,
      feels_like: 31,
      temp_min: 25,
      temp_max: 33,
      pressure: 1006,
      humidity: 48,
    },
    visibility: 9500,
    wind: { speed: 5.5, deg: 260, gust: 9.1 },
    clouds: { all: 25 },
    sys: {
      country: 'IN',
      sunrise: 1704069200,
      sunset: 1704110600,
    },
    timezone: 19800,
    name: 'Bikaner',
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }

  // Check if we have mock data for this city
  if (mockWeatherData[city]) {
    console.log(`Using mock weather data for ${city}`);
    return NextResponse.json(mockWeatherData[city]);
  }

  // Try to fetch from actual API
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  if (!apiKey) {
    console.log(`No API key configured, using mock data for ${city}`);
    return NextResponse.json(mockWeatherData[city] || mockWeatherData['Jaipur'], { status: 200 });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(`Fetching weather for ${city}`);

    const response = await fetch(url);

    if (!response.ok) {
      console.warn(`Weather API failed for ${city}: ${response.status}, using mock data`);
      return NextResponse.json(mockWeatherData[city] || mockWeatherData['Jaipur'], { status: 200 });
    }

    const data = await response.json();
    console.log(`Successfully fetched weather for ${city}`);
    return NextResponse.json(data);
  } catch (error) {
    console.warn(`Weather API error for ${city}:`, error, ' - using mock data');
    return NextResponse.json(mockWeatherData[city] || mockWeatherData['Jaipur'], { status: 200 });
  }
}
