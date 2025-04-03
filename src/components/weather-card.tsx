import './weather-card.css';
import ForecastWeather from '@/models/forecast-weather';
import PanelItem from './panel-item';
import { Card } from './ui/card';

export default function WeatherCard({ weather }: { weather: ForecastWeather }) {
	return (
		<div>
			<Card className="weather-card-container">
				<div className="daily-info-card">
					<div className="bold">{weather.location.localtime}</div>
					<div className="grey">{weather.location.name}</div>
					<div className="temperature-container">
						<img src={weather.current.condition.icon} />
						<div className="font-xlarge">{weather.current.temp_c} °C</div>
					</div>
				</div>

				<div className="description">
					<div>{weather.current.condition.text}</div>
				</div>

				<div className="extra-info">
					<PanelItem
						title="Feels Like"
						value={weather.current.feelslike_c}
						unit="°C"
					/>

					<PanelItem
						title="Precipitation"
						value={weather.current.precip_mm}
						unit="mm"
					/>

					<PanelItem
						title="UV Index"
						value={weather.current.uv}
					/>

					<PanelItem
						title="Wind"
						value={weather.current.wind_kph}
						unit="KPH"
					/>
				</div>
			</Card>
		</div>
	);
}
