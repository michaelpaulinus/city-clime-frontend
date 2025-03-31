import { NextResponse } from 'next/server';
import CurrentWeather from '@/models/current-weather';

export async function GET() {
	try {
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=London&aqi=yes`
		);
		const data: CurrentWeather = await response.json();
		return NextResponse.json(data);
	} catch (error) {}
}
