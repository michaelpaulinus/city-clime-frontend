import { NextResponse } from 'next/server';
import firebaseService from '@/services/firebase-service';
import cities from '@/app/data/cities';

export async function GET(_: Request) {
	try {
		const forecastedWeather = await firebaseService.getForecastedWeather();
		return NextResponse.json(forecastedWeather);
	} catch (error) {
		return NextResponse.json({ status: 500, error: error });
	}
}

export async function PUT(_: Request) {
	try {
		await Promise.all(
			cities.map(async (city) => {
				await firebaseService.addForecastedWeather(city);
			})
		);
		return NextResponse.json({ status: 201 });
	} catch (error) {
		return NextResponse.json({ status: 500, error: error });
	}
}
