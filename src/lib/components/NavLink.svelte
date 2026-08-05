<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';

	let { href, label, variant = 'desktop' } = $props();

	function isActive() {
		return $page.url.pathname === href;
	}
</script>

{#if variant === 'desktop'}
	<a
		href={resolve(href)}
		class:active={isActive()}
		class="desktop-link relative pb-1 transition-colors duration-200"
		style="color: {isActive() ? 'var(--text-primary)' : 'var(--text-muted)'};"
		aria-current={isActive() ? 'page' : undefined}
	>
		{label}
	</a>
	<style>
		.desktop-link::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%) scaleX(0);
			transform-origin: center;
			height: 1px;
			width: 100%;
			background-color: var(--text-primary);
			transition: transform 0.2s ease;
		}
		.desktop-link:hover::after,
		.desktop-link.active::after {
			transform: translateX(-50%) scaleX(1);
		}
	</style>
{:else}
	<a
		href={resolve(href)}
		class="-mx-1 block touch-manipulation rounded-md px-1 py-2.5 transition-all duration-200 hover:translate-x-1 {isActive()
			? 'font-medium'
			: ''}"
		style="color: {isActive() ? 'var(--text-primary)' : 'var(--text-muted)'};"
		aria-current={isActive() ? 'page' : undefined}
	>
		{label}
	</a>
{/if}
