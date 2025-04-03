'use client';

import { useEffect, useState } from 'react';
import WeatherCard from '@/components/weather-card';
import ForecastWeather from '@/models/forecast-weather';
import Dashboard from '@/components/dashboard';

export default function Home() {
	const [forecastWeather, setForecastWeather] = useState<ForecastWeather[]>([]);

	useEffect(() => {
		const fetchForecastWeather = async () => {
			const response = await fetch('/api/firebase/forecast');
			setForecastWeather((await response.json()) as ForecastWeather[]);
		};

		fetchForecastWeather();
	}, []);

	const dashboardItem = forecastWeather.find(
		(weather) => weather.location.name === 'Johannesburg'
	);

	return (
		<div>
			{forecastWeather.length > 0 && (
				<Dashboard forecastWeather={dashboardItem!} />
			)}
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
