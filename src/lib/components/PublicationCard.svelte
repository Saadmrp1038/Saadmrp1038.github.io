<script>
	let { title, authors, venue, year, links = {}, abstract } = $props();
	let expanded = $state(false);
</script>

<div
	class="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2.5 sm:p-4 transition-colors duration-200 hover:border-gray-300 dark:hover:border-slate-600"
>
	<div>
		{#if abstract}
			<button
				type="button"
				onclick={() => (expanded = !expanded)}
				class="w-full text-left group"
			>
				<h3 class="text-sm sm:text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1.5 sm:mb-2 leading-tight sm:leading-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:underline transition-colors cursor-pointer" style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;">
					{title}
				</h3>
			</button>
		{:else}
			<h3 class="text-sm sm:text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1.5 sm:mb-2 leading-tight sm:leading-normal" style="font-family: 'Inter', sans-serif; letter-spacing: -0.02em;">
				{title}
			</h3>
		{/if}
		<div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-600 dark:text-slate-400">
			{#if authors}
				<span class="font-medium">{authors}</span>
			{/if}
			{#if venue}
				<span class="text-gray-400 dark:text-slate-500">·</span>
				<span class="italic">{venue}</span>
			{/if}
			{#if year}
				<span class="text-gray-400 dark:text-slate-500">·</span>
				<span style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-feature-settings: 'liga' 1, 'calt' 1;">{year}</span>
			{/if}
			{#if links.PDF}
				<span class="text-gray-400 dark:text-slate-500">·</span>
				<a
					href={links.PDF}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
				>
					<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
					</svg>
					<span>PDF</span>
				</a>
			{/if}
		</div>
		{#if abstract && expanded}
			<div class="mt-2 pt-2 border-t border-gray-200 dark:border-slate-700">
				<div class="text-xs sm:text-sm text-gray-700 dark:text-slate-300 leading-relaxed" style="font-family: 'Inter', sans-serif; line-height: 1.6;">
					{abstract}
				</div>
			</div>
		{/if}
	</div>
</div>

