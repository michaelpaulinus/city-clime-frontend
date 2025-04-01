import CurrentWeather from '@/models/current-weather';
import ForecastWeather from '@/models/forecast-weather';

class WeatherService {
	async getCurrentWeather(location: string) {
		const response = await fetch(`api/weather/${location}/current`);
		return (await response.json()) as CurrentWeather;
	}

	async getForecastedWeather(location: string) {
		const response = await fetch(`api/weather/${location}/forecast`);
		return (await response.json()) as ForecastWeather;
	}
}

export default new WeatherService();
