import { NextRequest, NextResponse } from 'next/server';

const cityCoordinates: Record<string, { lat: number; lon: number }> = {
  Jaipur: { lat: 26.9124, lon: 75.8245 },
  Udaipur: { lat: 24.5854, lon: 73.7126 },
  Jodhpur: { lat: 26.2389, lon: 73.1812 },
  Jaisalmer: { lat: 26.9124, lon: 70.9142 },
  Pushkar: { lat: 26.4894, lon: 74.5588 },
  Bikaner: { lat: 28.0229, lon: 73.3119 },
};

function getWeatherDescription(weatherCode: number): string {
  const weatherMap: Record<number, string> = {
    0: 'Clear',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Depositing Rime Fog',
    51: 'Light Drizzle',
    53: 'Moderate Drizzle',
    55: 'Dense Drizzle',
    61: 'Slight Rain',
    63: 'Moderate Rain',
    65: 'Heavy Rain',
    71: 'Slight Snow',
    73: 'Moderate Snow',
    75: 'Heavy Snow',
    77: 'Snow Grains',
    80: 'Slight Rain Showers',
    81: 'Moderate Rain Showers',
    82: 'Violent Rain Showers',
    85: 'Slight Snow Showers',
    86: 'Heavy Snow Showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with Slight Hail',
    99: 'Thunderstorm with Heavy Hail',
  };
  return weatherMap[weatherCode] || 'Unknown';
}

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
