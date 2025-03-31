'use client';

import { useEffect, useState } from 'react';
import WeatherCard from '@/components/weather-card';
import weatherService from '@/services/weather-service';
import cities from './data/cities';
import ForecastWeather from '@/models/forecast-weather';

export default function Home() {
	const [forecastWeather, setForecastWeather] = useState<ForecastWeather[]>([]);

	useEffect(() => {
		const fetchForecastWeather = async () => {
			const forecastedWeatherData = await Promise.all(
				cities.map((city) => {
					return weatherService.getForecastedWeather(city);
				})
			);
			setForecastWeather(forecastedWeatherData);
		};

		fetchForecastWeather();
	}, []);

	return <div>{<WeatherCard weather={forecastWeather[0]} />} </div>;
}
