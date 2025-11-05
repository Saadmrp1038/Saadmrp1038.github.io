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
		class="relative transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:bg-gray-900 dark:after:bg-slate-100 after:transition-all after:duration-200 pb-1 {isActive() ? 'text-gray-900 dark:text-slate-100 after:w-full' : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 after:w-0 hover:after:w-full'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:dark:ring-slate-100 focus:ring-offset-2 focus:dark:ring-offset-slate-900 rounded"
		aria-current={isActive() ? 'page' : undefined}
	>
		{label}
	</a>
{:else}
	<a
		{href}
		role="menuitem"
		class="block hover:translate-x-1 transition-all duration-200 {isActive() ? 'text-gray-900 dark:text-slate-100 font-medium' : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100'} focus:outline-none focus:ring-2 focus:ring-gray-900 focus:dark:ring-slate-100 focus:ring-offset-2 focus:dark:ring-offset-slate-900 rounded"
		aria-current={isActive() ? 'page' : undefined}
	>
		{label}
	</a>
{/if}

