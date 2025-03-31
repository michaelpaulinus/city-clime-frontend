class WeatherService {
	async getCurrentWeather(location: string) {
		return fetch(`api/weather/${location}/current`);
	}

	async getForecastedWeather(location: string) {
		return fetch(`api/weather/${location}/forecast`);
	}
}

export default new WeatherService();
