<script>
	let { title, description, location } = $props();
</script>

<article
	class="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 transition-colors duration-200 hover:border-gray-300 dark:hover:border-slate-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-900 focus-within:dark:ring-slate-100 focus-within:ring-offset-2 focus-within:dark:ring-offset-slate-900"
	tabindex="0"
>
	<div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
		<h3 class="text-lg font-semibold text-gray-900 dark:text-slate-100">{title}</h3>
		<span
			class="inline-flex shrink-0 items-center rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-slate-300"
			aria-label="Location: {location}"
		>
			{location}
		</span>
	</div>
	<p class="leading-relaxed text-gray-600 dark:text-slate-400">{description}</p>
</article>

