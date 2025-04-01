import { NextResponse } from 'next/server';
import firebaseService from '@/services/firebase-service';

export async function PUT(
	_: Request,
	context: { params: { location: string } }
) {
	try {
		const { location } = await context.params;
		await firebaseService.addForecastedWeather(location);
		return NextResponse.json({ status: 201 });
	} catch (error) {
		return NextResponse.json({ status: 500 });
	}
}
