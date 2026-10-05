import type { Route } from './+types/services';
import { seo } from '@/lib/seo';
import ServicesPage from '@/components/ServicesPage.jsx';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Electrical services — Volt & Spark Electric',
		description: 'Comprehensive electrical services including residential wiring, commercial installations, emergency repairs, maintenance, panel upgrades and EV charging.',
	});
}

export default function Services() {
	return <ServicesPage />;
}
