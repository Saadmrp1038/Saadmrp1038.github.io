<script>
	let { title, authors, venue, year, links = {}, abstract } = $props();
	let expanded = $state(false);
</script>

<div
	class="glass-panel p-2.5 sm:p-4"
>
	<div>
		{#if abstract}
			<button
				type="button"
				onclick={() => (expanded = !expanded)}
				class="w-full text-left group"
			>
				<h3 class="text-sm sm:text-lg font-semibold mb-1.5 sm:mb-2 leading-tight sm:leading-normal group-hover:underline transition-colors cursor-pointer" style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary);">
					{title}
				</h3>
			</button>
		{:else}
			<h3 class="text-sm sm:text-lg font-semibold mb-1.5 sm:mb-2 leading-tight sm:leading-normal" style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary);">
				{title}
			</h3>
		{/if}
		<div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm" style="color: var(--text-muted);">
			{#if authors}
				<span class="font-medium">{authors}</span>
			{/if}
			{#if venue}
				<span style="color: var(--text-muted); opacity: 0.6;">·</span>
				<span class="italic">{venue}</span>
			{/if}
			{#if year}
				<span style="color: var(--text-muted); opacity: 0.6;">·</span>
				<span style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-feature-settings: 'liga' 1, 'calt' 1;">{year}</span>
			{/if}
			{#if links.PDF}
				<span style="color: var(--text-muted); opacity: 0.6;">·</span>
				<a
					href={links.PDF}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1 transition-colors"
					style="color: var(--accent);"
				>
					<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
					</svg>
					<span>PDF</span>
				</a>
			{/if}
		</div>
		{#if abstract && expanded}
			<div class="mt-2 pt-2" style="border-top: 1px solid var(--border-glass);">
				<div class="text-xs sm:text-sm leading-relaxed" style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);">
					{abstract}
				</div>
			</div>
		{/if}
	</div>
</div>

