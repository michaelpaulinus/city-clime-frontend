import type CurrentWeather from '../types/current-weather';
import type ForecastWeather from '../types/forecast-weather';

class WeatherService {
  private BASE_URL = import.meta.env.VITE_WEATHER_API_BASE_URL;

  async getCurrentWeather(location: string) {
    const response = await fetch(`${this.BASE_URL}/weather/current/${location}`);
    return (await response.json()) as CurrentWeather;
  }

  async getForecastedWeather(location: string) {
    const response = await fetch(`${this.BASE_URL}/weather/forecast/${location}`);
    return (await response.json()) as ForecastWeather;
  }
}

export default new WeatherService();
