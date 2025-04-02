import { NextRequest, NextResponse } from 'next/server';
import CurrentWeather from '@/models/current-weather';

export async function GET(
	_: NextRequest,
	context: { params: { location: string } }
) {
	try {
		const { location } = await context.params;
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=yes`
		);
		const data: CurrentWeather = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ status: 500, error: error });
	}
}
