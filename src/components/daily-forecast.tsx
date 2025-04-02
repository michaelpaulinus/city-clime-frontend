import ForecastWeather from '@/models/forecast-weather';
import './daily-forecast.css';

export default function DailyForecast({
	weather,
}: {
	weather: ForecastWeather;
}) {
	return (
		<div className="forecast-container">
			{weather.forecast.forecastday.map((day, index) => (
				<div
					className="forecast-item"
					key={day.date || index}
				>
					<div>{day.date}</div>
					<img
						src={day.day.condition.icon}
						alt={day.day.condition.text}
					/>
					<div className="forecast-temps">
						<div>{day.day.maxtemp_c}°</div> / <div>{day.day.mintemp_c}°</div>
					</div>
				</div>
			))}
		</div>
	);
}
