import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../models/weather.types';
import { firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class WeatherService {
	private BASE_URL = 'http://api.weatherapi.com/v1';
	private WEATHER_API_KEY = '';

	constructor(private httpClient: HttpClient) {}

	async getCurrentWeatherForCity(city: string) {
		return firstValueFrom(
			this.httpClient.get<WeatherData>(
				`${this.BASE_URL}/current.json?key=${this.WEATHER_API_KEY}&q=${city}`
			)
		);
	}
}
