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

  const coords = cityCoordinates[city];
  if (!coords) {
    return NextResponse.json({ error: `City ${city} not found` }, { status: 404 });
  }

  try {
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.append('latitude', coords.lat.toString());
    url.searchParams.append('longitude', coords.lon.toString());
    url.searchParams.append('current', 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,visibility');
    url.searchParams.append('daily', 'temperature_2m_max,temperature_2m_min,sunrise,sunset');
    url.searchParams.append('hourly', 'precipitation');
    url.searchParams.append('timezone', 'Asia/Kolkata');

    console.log(`Fetching weather for ${city} from Open-Meteo`);

    const response = await fetch(url.toString());

    if (!response.ok) {
      console.error(`Open-Meteo API error for ${city}: ${response.status}`);
      return NextResponse.json(
        { error: `Weather API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    const transformedData = {
      city,
      country: 'IN',
      temperature: Math.round(data.current.temperature_2m),
      feelsLike: Math.round(data.current.temperature_2m), // Open-Meteo doesn't provide feels_like in free plan
      tempMin: Math.round(data.daily.temperature_2m_min[0]),
      tempMax: Math.round(data.daily.temperature_2m_max[0]),
      pressure: 1010, // Open-Meteo doesn't provide pressure in free plan
      humidity: data.current.relative_humidity_2m,
      visibility: Math.round(data.current.visibility / 1000),
      cloudiness: 0, // Open-Meteo doesn't provide cloudiness directly
      description: getWeatherDescription(data.current.weather_code),
      main: getWeatherDescription(data.current.weather_code),
      icon: data.current.weather_code.toString(),
      windSpeed: Math.round(data.current.wind_speed_10m * 10) / 10,
      windDegree: data.current.wind_direction_10m,
      windGust: data.current.wind_gusts_10m ? Math.round(data.current.wind_gusts_10m * 10) / 10 : undefined,
      rainVolume: data.hourly?.precipitation?.[0],
      snowVolume: undefined,
      sunrise: new Date(data.daily.sunrise[0]).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      sunset: new Date(data.daily.sunset[0]).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      timezone: 19800,
    };

    console.log(`Successfully fetched weather for ${city}`);
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Open-Meteo API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch weather data', details: String(error) },
      { status: 500 }
    );
  }
}
