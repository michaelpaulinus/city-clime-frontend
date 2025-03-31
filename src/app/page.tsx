'use client';

import { useEffect, useState } from 'react';
import WeatherCard from '@/components/weather-card';
import weatherService from '@/services/weather-service';

export default function Home() {
	useEffect(() => {
		const fetchCurrentWeather = async () => {
			const response = await weatherService.getCurrentWeather('London');
		};

		fetchCurrentWeather();
	}, []);

	return (
		<div>
			<WeatherCard />
		</div>
	);
}
