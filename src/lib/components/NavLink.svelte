<script>
	import { page } from '$app/stores';

	let { href, label, variant = 'desktop' } = $props();

	function isActive() {
		return $page.url.pathname === href;
	}
</script>

{#if variant === 'desktop'}
	<a
		{href}
		class="relative transition-colors duration-200 pb-1 {isActive() ? 'after:w-full' : 'after:w-0 hover:after:w-full'}"
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
		{href}
		class="block py-2.5 px-1 -mx-1 rounded-md hover:translate-x-1 transition-all duration-200 touch-manipulation {isActive() ? 'font-medium' : ''}"
		style="color: {isActive() ? 'var(--text-primary)' : 'var(--text-muted)'};"
	>
		{label}
	</a>
{/if}

