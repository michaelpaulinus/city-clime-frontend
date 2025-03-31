import CurrentWeather from '@/models/current-weather';
import ForecastWeather from '@/models/forecast-weather';

class WeatherService {
	async getCurrentWeather(location: string) {
		const response = await fetch(`api/weather/${location}/current`);
		const data: CurrentWeather = await response.json();
		return data;
	}

	async getForecastedWeather(location: string) {
		const response = await fetch(`api/weather/${location}/forecast`);
		const data: ForecastWeather = await response.json();
		return data;
	}
}

export default new WeatherService();
