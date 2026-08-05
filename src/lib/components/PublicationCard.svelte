<script>
	/* Publication links are trusted, external URLs from repository-owned content. */
	/* eslint-disable svelte/no-navigation-without-resolve */
	let { id, title, authors, venue, venueUrl, year, links = [], abstract } = $props();
	let expanded = $state(false);
	const abstractId = `${id}-abstract`;
</script>

<article class="glass-panel p-3 sm:p-4">
	<h2
		class="mb-2 text-base leading-snug font-semibold sm:text-lg"
		style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary);"
	>
		{title}
	</h2>

	<div
		class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm"
		style="color: var(--text-muted);"
	>
		{#if authors}
			<span class="font-medium">
				{#each authors as author, index (`${author.name}-${index}`)}
					<span
						class:font-semibold={author.self}
						style:color={author.self ? 'var(--text-primary)' : undefined}
					>
						{author.name}{#if author.coFirst}<sup class="ml-0.5">*</sup>{/if}
					</span>{#if index < authors.length - 1}<span>,&nbsp;</span>{/if}
				{/each}
			</span>
		{/if}
		{#if venue}
			<span aria-hidden="true" style="opacity: 0.6;">·</span>
			{#if venueUrl}
				<a
					href={venueUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="italic underline transition-opacity hover:opacity-80"
					style="color: var(--accent); text-underline-offset: 0.2em;"
					aria-label={`${venue} conference website`}
				>
					{venue}
				</a>
			{:else}
				<span class="italic">{venue}</span>
			{/if}
		{/if}
		{#if year}
			<span aria-hidden="true" style="opacity: 0.6;">·</span>
			<span
				style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-feature-settings: 'liga' 1, 'calt' 1;"
			>
				{year}
			</span>
		{/if}
	</div>

	<div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
		{#each links as link (link.href)}
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-1 font-medium underline transition-opacity hover:opacity-80"
				style="color: var(--accent); text-underline-offset: 0.2em;"
			>
				<svg
					class="h-3.5 w-3.5 shrink-0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					stroke-width="2"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>
				<span>{link.label}</span>
			</a>
		{/each}

		{#if abstract}
			<button
				type="button"
				onclick={() => (expanded = !expanded)}
				class="inline-flex min-h-11 items-center gap-1.5 rounded-md px-1 font-medium underline transition-opacity hover:opacity-80 sm:min-h-0"
				style="color: var(--accent); text-underline-offset: 0.2em;"
				aria-expanded={expanded}
				aria-controls={abstractId}
			>
				<span>Abstract</span>
				<svg
					class="h-4 w-4 transition-transform duration-200 {expanded ? 'rotate-180' : ''}"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
				</svg>
			</button>
		{/if}
	</div>

	{#if abstract}
		<div
			id={abstractId}
			hidden={!expanded}
			class="mt-3 border-t pt-3 text-xs leading-relaxed sm:text-sm"
			style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary); border-color: var(--border-glass);"
			role="region"
			aria-label={`${title} abstract`}
		>
			{abstract}
		</div>
	{/if}
</article>
