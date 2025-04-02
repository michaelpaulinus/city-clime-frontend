import Astro from '@/models/astro';
import './astro-card.css';

export default function AstroCard(astro: { astro: Astro }) {
	return (
		<div className="astro-container">
			<div className="astro-card-item">{astro.astro.is_sun_up}</div>
			<div className="astro-card-item">{astro.astro.sunrise}</div>
			<div className="astro-card-item">{astro.astro.sunset}</div>
			<div className="astro-card-item">{astro.astro.is_moon_up}</div>
			<div className="astro-card-item">{astro.astro.moonrise}</div>
			<div className="astro-card-item">{astro.astro.moonset}</div>
			<div className="astro-card-item">{astro.astro.moon_illumination}</div>
			<div className="astro-card-item">{astro.astro.moon_phase}</div>
		</div>
	);
}
