import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.types';
import { Cities } from './data/city';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, WeatherCardComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'weather-app';
	weatherForCities = [] as WeatherData[];

	constructor(private weatherService: WeatherService) {}

	async ngOnInit() {
		for (const city of Object.values(Cities)) {
			const res = await this.weatherService.getCurrentWeatherForCity(city);
			this.weatherForCities.push(res);
		}
	}
}
