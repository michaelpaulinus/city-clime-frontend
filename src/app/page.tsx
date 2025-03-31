'use client';

import { useEffect, useState } from 'react';
import WeatherCard from '@/components/weather-card';

export default function Home() {
	useEffect(() => {
		const fetchHealth = async () => {
			const response = await fetch('/api/health');
			const data = await response.json();
			console.log(data);
		};

		fetchHealth();
	}, []);

	return (
		<div>
			<WeatherCard />
		</div>
	);
}
