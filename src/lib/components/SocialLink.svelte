<script>
	let { href, label, icon, external = true } = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="flex items-center gap-1.5 rounded-lg border lg:border-0 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 sm:px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-slate-300 transition-all duration-200 hover:border-gray-300 dark:hover:border-slate-600 lg:hover:border-transparent hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600 touch-manipulation min-h-[36px] w-full lg:w-auto justify-center lg:justify-start"
>
	{@html icon}
	{label}
</a>

