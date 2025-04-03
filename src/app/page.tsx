'use client';

import './page.css';
import { useEffect, useState } from 'react';
import WeatherCard from '@/components/weather-card';
import ForecastWeather from '@/models/forecast-weather';
import Dashboard from '@/components/dashboard';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

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
		<div className="container">
			{forecastWeather.length > 0 &&
				forecastWeather.map((weather, index) => (
					<Dialog>
						<DialogTrigger>
							<WeatherCard
								key={index}
								weather={weather}
							/>
						</DialogTrigger>
						<DialogContent>
							<DialogTitle></DialogTitle>
							{forecastWeather.length > 0 && (
								<Dashboard
									forecastWeather={
										forecastWeather.find(
											(weather2) =>
												weather2.location.name === weather.location.name
										)!
									}
								/>
							)}
						</DialogContent>
					</Dialog>
				))}
		</div>
	);
}
