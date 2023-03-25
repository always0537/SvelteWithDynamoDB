import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

//load 參數為loadEvent
export const load = ((e) => {
  if (e.params.para1 !== "123")
    return {
      content: e.params.para1,
      servercontent : e.data.testContent
    };
  throw error(404, '123不合適');
}) satisfies PageLoad;