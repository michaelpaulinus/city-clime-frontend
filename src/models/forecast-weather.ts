import CurrentWeather from './current-weather';
import ForecastDay from './forecast-day';

export default interface ForecastWeather {
	location: Location;
	current: CurrentWeather;
	forecast: {
		forecastday: ForecastDay[];
	};
}
