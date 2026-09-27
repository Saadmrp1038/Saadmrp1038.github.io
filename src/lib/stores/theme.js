import { writable } from 'svelte/store';

function getInitialTheme() {
	if (typeof window === 'undefined') return 'light';
	let savedTheme;
	try {
		savedTheme = window.localStorage.getItem('theme');
	} catch {
		// Storage may be disabled; the theme still works for this visit.
	}
	if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function persistTheme(value) {
	if (typeof window === 'undefined') return;
	try {
		window.localStorage.setItem('theme', value);
	} catch {
		// Keep the in-memory theme when storage is unavailable.
	}
}

function applyThemeClass(theme) {
	if (typeof document !== 'undefined') {
		const html = document.documentElement;
		if (theme === 'dark') {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	}
}

function createThemeStore() {
	const initialTheme = getInitialTheme();
	const { subscribe, set: setStore, update } = writable(initialTheme);

	// Apply initial theme class
	if (typeof document !== 'undefined') {
		applyThemeClass(initialTheme);
	}

	function set(value) {
		setStore(value);
		persistTheme(value);
		applyThemeClass(value);
	}

	function updateAndApply(updater) {
		update((current) => {
			const value = updater(current);
			persistTheme(value);
			applyThemeClass(value);
			return value;
		});
	}

	return {
		subscribe,
		set,
		update: updateAndApply,
		toggle: () => updateAndApply((current) => (current === 'dark' ? 'light' : 'dark'))
	};
}

export const theme = createThemeStore();
