import { writable } from 'svelte/store';

function getInitialTheme() {
	if (typeof window === 'undefined') return 'light';
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) return savedTheme;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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

	return {
		subscribe,
		set: (value) => {
			setStore(value);
			if (typeof window !== 'undefined') {
				localStorage.setItem('theme', value);
			}
			applyThemeClass(value);
		},
		update,
		toggle: () => {
			update((current) => {
				const newTheme = current === 'dark' ? 'light' : 'dark';
				if (typeof window !== 'undefined') {
					localStorage.setItem('theme', newTheme);
				}
				applyThemeClass(newTheme);
				return newTheme;
			});
		}
	};
}

export const theme = createThemeStore();

