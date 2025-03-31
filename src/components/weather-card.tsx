import ForecastWeather from '@/models/forecast-weather';

export default function WeatherCard(weather: ForecastWeather) {
	return (
		<div>
			<div>Location: {weather.location.name}</div>
			<div>Country icon: {weather.location.country}</div>
			<div>Temp: {weather.current.temp_c}</div>
			<div>Precip: {weather.current.precip_mm}</div>
			<div>Wind: {weather.current.wind_mph}</div>
		</div>
	);
}
