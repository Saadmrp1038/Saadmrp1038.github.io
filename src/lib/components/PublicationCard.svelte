<script>
	/* Publication links are trusted, external URLs from repository-owned content. */
	/* eslint-disable svelte/no-navigation-without-resolve */
	let { title, authors, venue, year, links = [], abstract } = $props();
	let expanded = $state(false);
</script>

<div class="glass-panel p-2.5 sm:p-4">
	<div>
		{#if abstract}
			<button type="button" onclick={() => (expanded = !expanded)} class="group w-full text-left">
				<h3
					class="mb-1.5 cursor-pointer text-sm leading-tight font-semibold transition-colors group-hover:underline sm:mb-2 sm:text-lg sm:leading-normal"
					style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary);"
				>
					{title}
				</h3>
			</button>
		{:else}
			<h3
				class="mb-1.5 text-sm leading-tight font-semibold sm:mb-2 sm:text-lg sm:leading-normal"
				style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary);"
			>
				{title}
			</h3>
		{/if}
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
				<span style="color: var(--text-muted); opacity: 0.6;">·</span>
				<span class="italic">{venue}</span>
			{/if}
			{#if year}
				<span style="color: var(--text-muted); opacity: 0.6;">·</span>
				<span
					style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-feature-settings: 'liga' 1, 'calt' 1;"
					>{year}</span
				>
			{/if}
			{#each links as link (link.href)}
				<span style="color: var(--text-muted); opacity: 0.6;">·</span>
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1 transition-colors hover:underline"
					style="color: var(--accent);"
				>
					<svg
						class="h-3.5 w-3.5 shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						stroke-width="2"
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
		</div>
		{#if abstract && expanded}
			<div class="mt-2 pt-2" style="border-top: 1px solid var(--border-glass);">
				<div
					class="text-xs leading-relaxed sm:text-sm"
					style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);"
				>
					{abstract}
				</div>
			</div>
		{/if}
	</div>
</div>
