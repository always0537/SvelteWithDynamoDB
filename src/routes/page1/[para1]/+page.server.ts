import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {testContent : "123"};
}) satisfies PageServerLoad;