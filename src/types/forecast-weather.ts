import type Location from './location';
import type Current from './current';
import type ForecastDay from './forecast-day';

export default interface ForecastWeather {
  location: Location;
  current: Current;
  forecast: {
    forecastday: ForecastDay[];
  };
}
