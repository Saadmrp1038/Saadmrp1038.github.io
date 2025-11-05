<script>
	let { href, label, icon, external = true } = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-300 transition-all duration-200 hover:border-gray-300 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600 touch-manipulation min-h-[44px]"
>
	{@html icon}
	{label}
</a>

