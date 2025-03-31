class WeatherService {
	async getCurrentWeather(location: string) {
		return fetch('api/weather/current');
	}

	getForecastedWeather(location: string) {
		return fetch('api/weather/forecast');
	}
}

export default new WeatherService();
