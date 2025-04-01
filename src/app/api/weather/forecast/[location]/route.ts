import { NextResponse } from 'next/server';
import ForecastWeather from '@/models/forecast-weather';

export async function GET(
	_: Request,
	context: { params: { location: string } }
) {
	try {
		const { location } = await context.params;
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=no`
		);
		const data: ForecastWeather = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ status: 500, error: error });
	}
}
