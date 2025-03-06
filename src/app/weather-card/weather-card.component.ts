import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
	selector: 'app-weather-card',
	standalone: true,
	imports: [CardModule],
	templateUrl: './weather-card.component.html',
	styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
	@Input() city: string = '';
	@Input() temperature: number = 0;
}
