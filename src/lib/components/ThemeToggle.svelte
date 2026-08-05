<script>
	import { theme } from '$lib/stores/theme';
	import { tick } from 'svelte';

	let { variant = 'desktop' } = $props();

	// Set to true to enable the circular wave transition, false for instant switch
	const ANIMATE_THEME_TRANSITION = true;

	async function toggleTheme() {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!ANIMATE_THEME_TRANSITION || !document.startViewTransition || prefersReducedMotion) {
			theme.toggle();
			return;
		}

		// Start from top-right corner, expand to bottom-left
		const x = window.innerWidth;
		const y = 0;
		const endRadius = Math.hypot(window.innerWidth, window.innerHeight);

		const transition = document.startViewTransition(async () => {
			theme.toggle();
			await tick();
		});

		await transition.ready;

		// Animate a circular clip-path from the button outward
		document.documentElement.animate(
			{
				clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
			},
			{
				duration: 500,
				easing: 'ease-in-out',
				pseudoElement: '::view-transition-new(root)'
			}
		);
	}
</script>

<button
	type="button"
	onclick={toggleTheme}
	class="p-3 {variant === 'mobile'
		? 'rounded-md'
		: '-mr-2'} touch-manipulation transition-all duration-200"
	style="color: var(--text-muted);"
	aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
	title={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if $theme === 'dark'}
		<!-- Sun icon for light mode -->
		<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	{:else}
		<!-- Moon icon for dark mode -->
		<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	{/if}
</button>
