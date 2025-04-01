'use client';

import { useEffect, useState } from 'react';
import WeatherCard from '@/components/weather-card';
import ForecastWeather from '@/models/forecast-weather';

export default function Home() {
	const [forecastWeather, setForecastWeather] = useState<ForecastWeather[]>([]);

	useEffect(() => {
		const fetchForecastWeather = async () => {
			const response = await fetch('/api/firebase/forecast');
			setForecastWeather((await response.json()) as ForecastWeather[]);
		};

		fetchForecastWeather();
	}, []);

	return (
		<div>
			{forecastWeather.length > 0 &&
				forecastWeather.map((weather, index) => (
					<WeatherCard
						key={index}
						weather={weather}
					/>
				))}
		</div>
	);
}
