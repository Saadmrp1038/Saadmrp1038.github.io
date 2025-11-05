<script>
	let { title, organization, organizationUrl, location, dateRange, description, type = 'work', logo } = $props();
</script>

<div
	class="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 sm:p-6 transition-colors duration-200 hover:border-gray-300 dark:hover:border-slate-600"
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
				<h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">
					{title}
				</h3>
				<div class="flex flex-row items-baseline gap-1 sm:gap-2 text-sm text-gray-600 dark:text-slate-400">
					{#if organization}
						{#if organizationUrl}
							<a
								href={organizationUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="font-medium hover:text-gray-900 dark:hover:text-slate-200 hover:underline transition-colors"
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
					class="inline-flex shrink-0 w-fit items-center rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 px-2.5 sm:px-3 py-1 text-xs font-medium text-gray-600 dark:text-slate-300 self-start"
				>
					{dateRange}
				</span>
			{/if}
		</div>
	</div>
	{#if description}
		<p class="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-slate-400 mt-3">
			{description}
		</p>
	{/if}
</div>

