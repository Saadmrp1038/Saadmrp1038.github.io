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
		class="relative transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:bg-gray-900 dark:after:bg-slate-100 after:transition-all after:duration-200 pb-1 {isActive() ? 'text-gray-900 dark:text-slate-100 after:w-full' : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 after:w-0 hover:after:w-full'}"
	>
		{label}
	</a>
{:else}
	<a
		{href}
		class="block py-2.5 px-1 -mx-1 rounded-md active:bg-gray-100 dark:active:bg-slate-800 hover:translate-x-1 transition-all duration-200 touch-manipulation {isActive() ? 'text-gray-900 dark:text-slate-100 font-medium' : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100'}"
	>
		{label}
	</a>
{/if}

