import type ForecastWeather from '../types/forecast-weather';
import httpClient from '../configs/http-client';

class WeatherService {
  async getForecastedWeather() {
    return httpClient.get<ForecastWeather>(`/weather/forecast`);
  }
}

export default new WeatherService();
