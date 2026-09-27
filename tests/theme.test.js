import assert from 'node:assert/strict';
import test from 'node:test';

test('theme remains usable when local storage is unavailable', async () => {
	const classes = new Set();
	globalThis.window = {
		localStorage: {
			getItem: () => {
				throw new Error('Storage blocked');
			},
			setItem: () => {
				throw new Error('Storage blocked');
			}
		},
		matchMedia: () => ({ matches: false })
	};
	globalThis.document = {
		documentElement: {
			classList: {
				add: (name) => classes.add(name),
				remove: (name) => classes.delete(name)
			}
		}
	};

	try {
		const { theme } = await import('../src/lib/stores/theme.js');
		let currentTheme;
		const unsubscribe = theme.subscribe((value) => (currentTheme = value));

		assert.equal(currentTheme, 'light');
		theme.toggle();
		assert.equal(currentTheme, 'dark');
		assert.ok(classes.has('dark'));

		theme.set('light');
		assert.equal(currentTheme, 'light');
		assert.ok(!classes.has('dark'));
		unsubscribe();
	} finally {
		delete globalThis.window;
		delete globalThis.document;
	}
});
