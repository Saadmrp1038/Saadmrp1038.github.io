<script>
	let { title, organization, organizationUrl, location, dateRange, description, type = 'work', logo } = $props();
</script>

<div
	class="glass-panel p-4 sm:p-6"
>
	<div class="mb-3 flex flex-row gap-3 sm:gap-4 items-start">
		{#if logo}
			<div class="flex items-start shrink-0">
				<img
					src={logo}
					alt={organization ? `${organization} logo` : 'Organization logo'}
					class="h-16 w-16 sm:h-20 sm:w-20 object-contain bg-white rounded p-2"
				/>
			</div>
		{/if}
		<div class="flex-1 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-start sm:justify-between min-w-0">
			<div class="flex-1 min-w-0">
				<h3 class="text-base sm:text-lg font-semibold mb-1" style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary);">
					{title}
				</h3>
				<div class="flex flex-row items-baseline gap-1 sm:gap-2 text-sm" style="color: var(--text-muted);">
					{#if organization}
						{#if organizationUrl}
							<a
								href={organizationUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="font-medium hover:underline transition-colors"
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
					class="inline-flex shrink-0 w-fit items-center rounded-full px-2.5 sm:px-3 py-1 text-xs font-medium self-start"
					style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-weight: 500; font-size: 0.85rem; font-feature-settings: 'liga' 1, 'calt' 1; color: var(--text-muted); background-color: var(--tag-bg); border: 1px solid var(--tag-border);"
				>
					{dateRange}
				</span>
			{/if}
		</div>
	</div>
	{#if description}
		<p class="text-sm sm:text-base leading-relaxed mt-3" style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);">
			{@html description}
		</p>
	{/if}
</div>

