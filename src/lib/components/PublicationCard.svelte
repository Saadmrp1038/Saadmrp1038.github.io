<script>
	let { title, authors, venue, year, links = {} } = $props();
</script>

<div
	class="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 sm:p-6 transition-colors duration-200 hover:border-gray-300 dark:hover:border-slate-600"
>
	<div class="mb-3">
		<h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
			{title}
		</h3>
		<div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm text-gray-600 dark:text-slate-400">
			{#if authors}
				<span>{authors}</span>
			{/if}
			{#if venue}
				<span class="hidden sm:inline">·</span>
				<span class="italic">{venue}</span>
			{/if}
			{#if year}
				<span class="hidden sm:inline">·</span>
				<span>{year}</span>
			{/if}
		</div>
	</div>
	{#if Object.keys(links).length > 0}
		<div class="flex flex-wrap gap-2 mt-3">
			{#each Object.entries(links) as [label, url]}
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors"
				>
					{label}
				</a>
			{/each}
		</div>
	{/if}
</div>

