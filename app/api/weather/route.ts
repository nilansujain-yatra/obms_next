import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key is not configured' }, { status: 500 });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(`Fetching weather for ${city} with key ending in ${apiKey.slice(-4)}`);

    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Weather API error for ${city}: ${response.status}`, errorText);
      return NextResponse.json(
        { error: `Weather API error: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log(`Successfully fetched weather for ${city}`);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Weather API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch weather data', details: String(error) },
      { status: 500 }
    );
  }
}
