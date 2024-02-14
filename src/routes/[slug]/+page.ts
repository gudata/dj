import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import gyms from "$lib/gyms.json";

export const load: PageLoad = ({ params }) => {

	const current_gym = gyms.find(record => record.slug === params.slug);

	return current_gym

	error(404, 'Not found');
};
