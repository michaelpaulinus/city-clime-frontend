export default function getMoonIcon(phase: string): string {
	switch (phase) {
		case 'New Moon':
			return 'mdi:moon-new';
		case 'Waxing Crescent':
			return 'wi:moon-waxing-6';
		case 'First Quarter':
			return 'mdi:moon-first-quarter';
		case 'Waxing Gibbous':
			return 'mdi:moon-waxing-gibbous';
		case 'Full Moon':
			return 'mdi:moon-full';
		case 'Waning Gibbous':
			return 'mdi:moon-waning-gibbous';
		case 'Last Quarter':
			return 'mdi:moon-last-quarter';
		case 'Waning Crescent':
			return 'streamline:waning-cresent-moon';
		default:
			return 'fluent-emoji-flat:new-moon';
	}
}
