import CurrentWeather from '@/models/current-weather';
import ForecastWeather from '@/models/forecast-weather';

class WeatherService {
	private BASE_URL = process.env.API_BASE_URL;

	async getCurrentWeather(location: string) {
		const response = await fetch(
			`${this.BASE_URL}/api/weather/current/${location}`
		);
		return (await response.json()) as CurrentWeather;
	}

	async getForecastedWeather(location: string) {
		const response = await fetch(
			`${this.BASE_URL}/api/weather/forecast/${location}`
		);
		return (await response.json()) as ForecastWeather;
	}
}

export default new WeatherService();
