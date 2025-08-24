import type CurrentWeather from '../types/current-weather';
import type ForecastWeather from '../types/forecast-weather';
import httpClient from '../configs/http-client';

class WeatherService {
  async getCurrentWeather(location: string) {
    return httpClient.get<CurrentWeather>(`$/weather/current/${location}`);
  }

  async getForecastedWeather(location: string) {
    return httpClient.get<ForecastWeather>(`/weather/forecast/${location}`);
  }
}

export default new WeatherService();
