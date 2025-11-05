<script>
	let { href, label, icon, external = true } = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-slate-300 transition-colors duration-200 hover:border-gray-300 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:dark:ring-slate-100 focus:ring-offset-2 focus:dark:ring-offset-slate-900"
	aria-label={external ? `${label} (opens in new tab)` : label}
>
	<span aria-hidden="true">{@html icon}</span>
	{label}
</a>

