import { NextResponse } from 'next/server';
import firebaseService from '@/services/firebase-service';

export async function GET(_: Request) {
	try {
		const forecastedWeather = await firebaseService.getForecastedWeather();
		return NextResponse.json(forecastedWeather);
	} catch (error) {
		return NextResponse.json({ status: 500 });
	}
}
