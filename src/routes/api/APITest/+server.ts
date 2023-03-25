import { error, redirect, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (request) => {
    return new Response("you used GET to get url : " + request.url.toString());
};

export const POST: RequestHandler = async (request) => {
    return new Response("you used POST to get url : " + request.url.toString());
};

export const PUT: RequestHandler = async (request) => {
    return new Response("you used PUT to get url : " + request.url.toString());
};

//POST/PUT/PATCH/DELETE/OPTIONS
//+server.js files can be placed in the same directory as +page files, allowing the same route to be either a page or an API endpoint. To determine which, SvelteKit applies the following rules:

// PUT/PATCH/DELETE/OPTIONS requests are always handled by +server.js since they do not apply to pages
// GET/POST requests are treated as page requests if the accept header prioritises text/html (in other words, it's a browser page request), else they are handled by +server.js