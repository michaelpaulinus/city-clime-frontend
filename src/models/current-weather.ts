import type Current from './current';

export default interface CurrentWeather {
	location: Location;
	current: Current;
}
