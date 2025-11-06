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
			handleHttpError: ({ path, status }) => {
				// During prerendering with base path, 404s can occur due to base path mismatches
				// These will be resolved at runtime, so we allow them during build
				if (status === 404) {
					return;
				}
				// For other errors, fail the build
				throw new Error(`Failed to prerender ${path}: ${status}`);
			}
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
