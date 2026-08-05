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
		class="relative pb-1 transition-colors duration-200 {isActive()
			? 'after:w-full'
			: 'after:w-0 hover:after:w-full'}"
		style="color: {isActive() ? 'var(--text-primary)' : 'var(--text-muted)'};"
	>
		{label}
	</a>
	<style>
		a {
			position: relative;
		}
		a::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 1px;
			background-color: var(--text-primary);
			transition: width 0.2s;
		}
	</style>
{:else}
	<a
		href={resolve(href)}
		class="-mx-1 block touch-manipulation rounded-md px-1 py-2.5 transition-all duration-200 hover:translate-x-1 {isActive()
			? 'font-medium'
			: ''}"
		style="color: {isActive() ? 'var(--text-primary)' : 'var(--text-muted)'};"
	>
		{label}
	</a>
{/if}
