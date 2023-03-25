import type { LayoutLoad } from './$types';

export const load = (async () => {
    return {content : "layout.ts回傳資料"};
}) satisfies LayoutLoad;