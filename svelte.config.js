import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/custom-portfolio' : ''
		},
		prerender: {
			entries: ['*'],
			handleHttpError: ({ path }) => {
				// Ignore 404 errors for root path during prerendering with base path
				if (path === '/') {
					return;
				}
				throw new Error(`Failed to prerender ${path}`);
			}
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
