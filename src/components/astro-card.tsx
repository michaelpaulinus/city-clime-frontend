import Astro from '@/models/astro';
import './astro-card.css';

export default function AstroCard(astro: { astro: Astro }) {
	return (
		<div className="astro-container">
			<div className="astro-card-item">
				<div>Is Sun Up</div>
				<div>{astro.astro.is_sun_up}</div>
			</div>
			<div className="astro-card-item">
				<div>Sunrise</div>
				<div>{astro.astro.sunrise}</div>
			</div>
			<div className="astro-card-item">
				<div>Sunset</div>
				<div>{astro.astro.sunset}</div>
			</div>
			<div className="astro-card-item">
				<div>Is Moon Up</div>
				<div>{astro.astro.is_moon_up}</div>
			</div>
			<div className="astro-card-item">
				<div>Moonrise</div>
				<div>{astro.astro.moonrise}</div>
			</div>
			<div className="astro-card-item">
				<div>Moonset</div>
				<div>{astro.astro.moonset}</div>
			</div>
			<div className="astro-card-item">
				<div>Moon Illumination</div>
				<div>{astro.astro.moon_illumination}%</div>
			</div>
			<div className="astro-card-item">
				<div>Moon Phase</div>
				<div>{astro.astro.moon_phase}</div>
			</div>
		</div>
	);
}
