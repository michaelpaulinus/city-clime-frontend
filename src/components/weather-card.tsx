import ForecastWeather from '@/models/forecast-weather';

export default function WeatherCard({ weather }: { weather: ForecastWeather }) {
	return (
		<div>
			<div>Location: {weather.location.name}</div>
			<div>Country icon: {weather.location.country}</div>
			<div>Temp: {weather.current.temp_c}</div>
			<div>Precip: {weather.current.precip_mm}</div>
			<div>Description: {weather.current.condition.text}</div>
			<div>Description icon: {weather.current.condition.icon}</div>
			<div>UV index: {weather.current.uv}</div>
			<div>Wind: {weather.current.wind_mph}</div>
		</div>
	);
}
