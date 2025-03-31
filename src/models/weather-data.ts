import type CurrentWeather from "./current-weather";

export default interface WeatherData {
	location: Location;
	current: CurrentWeather;
}
