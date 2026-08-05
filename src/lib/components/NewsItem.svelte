<script>
	/* News links are trusted, external URLs from repository-owned content. */
	/* eslint-disable svelte/no-navigation-without-resolve */
	let { date, segments = [] } = $props();

	function linkClasses(segment) {
		const interactive = 'underline transition-colors hover:text-blue-500';

		if (segment.kind === 'publication') return `${interactive} font-semibold italic`;
		if (segment.kind === 'project') return `${interactive} font-semibold`;
		return interactive;
	}
</script>

<div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
	<span
		class="shrink-0 text-xs font-medium tracking-wide uppercase sm:min-w-[80px]"
		style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-weight: 500; font-feature-settings: 'liga' 1, 'calt' 1; color: var(--text-muted);"
	>
		{date}
	</span>
	<p
		class="flex-1 text-sm leading-relaxed sm:text-base"
		style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);"
	>
		{#each segments as segment, index (index)}
			{#if segment.href}
				<a
					href={segment.href}
					target="_blank"
					rel="noopener noreferrer"
					class={linkClasses(segment)}
				>
					{segment.text}
				</a>
			{:else if segment.kind === 'publication'}
				<span class="font-semibold italic" style="color: var(--text-primary);">
					{segment.text}
				</span>
			{:else if segment.kind === 'project'}
				<span class="font-semibold" style="color: var(--text-primary);">
					{segment.text}
				</span>
			{:else}
				{segment.text}
			{/if}
		{/each}
	</p>
</div>
