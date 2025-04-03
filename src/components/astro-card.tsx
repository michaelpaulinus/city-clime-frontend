import Astro from '@/models/astro';
import './astro-card.css';
import { Icon } from '@iconify/react';
import getMoonIcon from '@/utils/get-moon-icon';

export default function AstroCard(astro: { astro: Astro }) {
	return (
		<div className="astro-container">
			<div className="astro-card-item">
				<div>Is Sun Up</div>
				<Icon
					icon="fluent-emoji:sun"
					width="36"
					height="36"
				/>
				<div>{astro.astro.is_sun_up ? 'Yes' : 'No'}</div>
			</div>
			<div className="astro-card-item">
				<div>Sunrise</div>
				<Icon
					icon="mdi:sunrise"
					width="36"
					height="36"
				/>
				<div>{astro.astro.sunrise}</div>
			</div>
			<div className="astro-card-item">
				<div>Sunset</div>
				<Icon
					icon="solar:sunset-bold"
					width="36"
					height="36"
				/>
				<div>{astro.astro.sunset}</div>
			</div>
			<div className="astro-card-item">
				<div>Is Moon Up</div>
				<Icon
					icon="twemoji:new-moon"
					width="36"
					height="36"
				/>
				<div>{astro.astro.is_moon_up ? 'Yes' : 'No'}</div>
			</div>
			<div className="astro-card-item">
				<div>Moonrise</div>
				<Icon
					icon="mdi:moonrise"
					width="36"
					height="36"
				/>
				<div>{astro.astro.moonrise}</div>
			</div>
			<div className="astro-card-item">
				<div>Moonset</div>
				<Icon
					icon="hugeicons:moonset"
					width="36"
					height="36"
				/>
				<div>{astro.astro.moonset}</div>
			</div>
			<div className="astro-card-item">
				<div>Moon Illumination</div>
				<Icon
					icon="twemoji:full-moon"
					width="36"
					height="36"
				/>
				<div>{astro.astro.moon_illumination}%</div>
			</div>
			<div className="astro-card-item">
				<div>Moon Phase</div>
				<Icon
					icon={getMoonIcon(astro.astro.moon_phase)}
					width="36"
					height="36"
				/>
				<div>{astro.astro.moon_phase}</div>
			</div>
		</div>
	);
}
