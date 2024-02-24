import classRegistry from '$lib/classRegistry.json';
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
	const registry = classRegistry.find((c) => c.slug === params.slug);
	let post;
	if (registry) {
		let body = await fetch(registry.dir)
			.then((res) => res.text())
			.catch(() => null);
		if (body) {
			post = { ...registry, body };
		}
	}
	return {
		post,
		slug: params.slug
	};
};
