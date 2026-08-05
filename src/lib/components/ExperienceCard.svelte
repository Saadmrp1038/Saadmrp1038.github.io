<script>
	/* This component only receives trusted, external URLs from repository-owned content. */
	/* eslint-disable svelte/no-navigation-without-resolve */
	let { title, organization, organizationUrl, location, dateRange, description, project, logo } =
		$props();
</script>

<div class="glass-panel p-4 sm:p-6">
	<div class="mb-3 flex flex-row items-start gap-3 sm:gap-4">
		{#if logo}
			<div class="flex shrink-0 items-start">
				<img
					src={logo}
					alt={organization ? `${organization} logo` : 'Organization logo'}
					class="h-16 w-16 rounded bg-white object-contain p-2 sm:h-20 sm:w-20"
				/>
			</div>
		{/if}
		<div
			class="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3"
		>
			<div class="min-w-0 flex-1">
				<h3
					class="mb-1 text-base font-semibold sm:text-lg"
					style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary);"
				>
					{title}
				</h3>
				<div
					class="flex flex-row items-baseline gap-1 text-sm sm:gap-2"
					style="color: var(--text-muted);"
				>
					{#if organization}
						{#if organizationUrl}
							<a
								href={organizationUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="font-medium transition-colors hover:underline"
								style="color: var(--text-muted);"
							>
								{organization}
							</a>
						{:else}
							<span class="font-medium">{organization}</span>
						{/if}
					{/if}
					{#if location}
						<span>·</span>
						<span>{location}</span>
					{/if}
				</div>
			</div>
			{#if dateRange}
				<span
					class="inline-flex w-fit shrink-0 items-center self-start rounded-full px-2.5 py-1 text-xs font-medium sm:px-3"
					style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-weight: 500; font-size: 0.85rem; font-feature-settings: 'liga' 1, 'calt' 1; color: var(--text-muted); background-color: var(--tag-bg); border: 1px solid var(--tag-border);"
				>
					{dateRange}
				</span>
			{/if}
		</div>
	</div>
	{#if description}
		<p
			class="mt-3 text-sm leading-relaxed sm:text-base"
			style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);"
		>
			{description}{#if project}<span class="inline-flex whitespace-nowrap"
					><span>&nbsp;(</span><a
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						class="font-medium text-blue-600 hover:underline dark:text-sky-400"
					>
						{project.label}
					</a><span>).</span></span
				>
			{/if}
		</p>
	{/if}
</div>
