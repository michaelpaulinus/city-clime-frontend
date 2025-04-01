import { NextResponse } from 'next/server';

export async function GET() {
	try {
		return NextResponse.json({ status: 200 });
	} catch (error) {
		return NextResponse.json({ status: 500, error: error });
	}
}
