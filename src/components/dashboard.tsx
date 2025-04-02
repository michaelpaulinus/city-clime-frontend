import ForecastWeather from '@/models/forecast-weather';
import LineGraph from '@/components/line-graph';
import DailyForecast from './daily-forecast';
import AstroCard from './astro-card';
import './dashboard.css';

export default function Dashboard({
	forecastWeather,
}: {
	forecastWeather: ForecastWeather;
}) {
	const tempData = forecastWeather.forecast.forecastday[0].hour.map((h) => ({
		time: h.time,
		realTemp: h.temp_c,
		feelsTemp: h.feelslike_c,
	}));

	const rainData = forecastWeather.forecast.forecastday[0].hour.map((h) => ({
		time: h.time,
		willRain: h.will_it_rain,
		chanceRain: h.chance_of_rain,
	}));

	return (
		<div className="container">
			<div>{forecastWeather.location.name}</div>
			<div>
				<DailyForecast weather={forecastWeather} />
			</div>
			<div className="graphs">
				<LineGraph
					data={tempData}
					dataVars={['realTemp', 'feelsTemp']}
					labels={['Real Temp', 'Feel Temp']}
				/>

				<LineGraph
					data={rainData}
					dataVars={['willRain', 'chanceRain']}
					labels={['Will Rain', 'Chance of Rain']}
				/>
			</div>
			<div>
				<AstroCard astro={forecastWeather.forecast.forecastday[0].astro} />
			</div>
		</div>
	);
}
