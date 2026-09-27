<script>
	/* Experience links are trusted, external URLs from repository-owned content. */
	/* eslint-disable svelte/no-navigation-without-resolve */
	let { group, divider = false } = $props();

	const hasMultipleRoles = group.roles.length > 1;
</script>

<article
	class:border-t={divider}
	class="px-4 py-5 sm:px-6 sm:py-6"
	style="border-color: var(--border-glass);"
>
	<div class="grid grid-cols-[3rem_minmax(0,1fr)] gap-3 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-4">
		<img
			src={group.logo}
			alt={group.logoAlt}
			class="h-12 w-12 rounded-lg bg-white object-contain p-1.5 sm:h-16 sm:w-16 sm:p-2"
			loading="lazy"
		/>

		<div class="min-w-0">
			{#if hasMultipleRoles}
				<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
					<div class="min-w-0">
						<h3 class="text-base leading-snug sm:text-lg">
							{#if group.organizationUrl}
								<a
									href={group.organizationUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="underline transition-opacity hover:opacity-80"
									style="text-underline-offset: 0.2em;"
								>
									{group.organization}
								</a>
							{:else}
								{group.organization}
							{/if}
						</h3>
						{#if group.context}
							<p class="mt-0.5 text-xs sm:text-sm" style="color: var(--text-muted);">
								{group.context}
							</p>
						{/if}
					</div>
				</div>

				<div
					class="role-timeline mt-5 ml-1 border-l pl-5 sm:ml-2 sm:pl-6"
					style="border-color: var(--border-glass);"
				>
					{#each group.roles as role, index (role.title)}
						<section
							class="timeline-role relative {index > 0 ? 'border-t pt-5' : ''} {index <
							group.roles.length - 1
								? 'pb-5'
								: ''}"
							style="border-color: var(--border-glass);"
						>
							<div
								class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
							>
								<h4 class="text-sm leading-snug sm:text-base">{role.title}</h4>
								<span
									class="date-text shrink-0 text-xs sm:text-sm"
									style="color: var(--text-muted);"
								>
									{role.dateRange}
								</span>
							</div>
							{#if role.description}
								<p
									class="mt-2 max-w-[72ch] text-sm leading-relaxed"
									style="color: var(--text-primary);"
								>
									{role.description}
								</p>
							{/if}
							{#if role.project}
								<a
									href={role.project.href}
									target="_blank"
									rel="noopener noreferrer"
									class="mt-2 inline-flex min-h-11 items-center text-sm font-medium underline transition-opacity hover:opacity-80 sm:min-h-0"
									style="color: var(--accent); text-underline-offset: 0.2em;"
								>
									{role.project.label}
								</a>
							{/if}
						</section>
					{/each}
				</div>
			{:else}
				{@const role = group.roles[0]}
				<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
					<h3 class="text-base leading-snug sm:text-lg">{role.title}</h3>
					<span class="date-text shrink-0 text-xs sm:text-sm" style="color: var(--text-muted);">
						{role.dateRange}
					</span>
				</div>

				<div
					class="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-xs sm:text-sm"
					style="color: var(--text-muted);"
				>
					{#if group.organizationUrl}
						<a
							href={group.organizationUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="font-medium underline transition-opacity hover:opacity-80"
							style="color: var(--accent); text-underline-offset: 0.2em;"
						>
							{group.organization}
						</a>
					{:else}
						<span class="font-medium" style="color: var(--text-primary);">{group.organization}</span
						>
					{/if}
					{#if group.context}
						<span aria-hidden="true">·</span>
						<span>{group.context}</span>
					{/if}
				</div>

				{#if role.description}
					<p
						class="mt-3 max-w-[72ch] text-sm leading-relaxed sm:text-base"
						style="color: var(--text-primary);"
					>
						{role.description}
					</p>
				{/if}
				{#if role.project}
					<a
						href={role.project.href}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-2 inline-flex min-h-11 items-center text-sm font-medium underline transition-opacity hover:opacity-80 sm:min-h-0"
						style="color: var(--accent); text-underline-offset: 0.2em;"
					>
						{role.project.label}
					</a>
				{/if}
			{/if}
		</div>
	</div>
</article>

<style>
	.date-text {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-feature-settings:
			'liga' 1,
			'calt' 1;
	}

	.timeline-role::before {
		content: '';
		position: absolute;
		top: 0.42rem;
		left: -1.58rem;
		width: 0.55rem;
		height: 0.55rem;
		border: 2px solid var(--bg-main);
		border-radius: 999px;
		background: var(--text-muted);
	}

	.timeline-role.border-t::before {
		top: 1.67rem;
	}

	@media (min-width: 640px) {
		.timeline-role::before {
			left: -1.83rem;
		}
	}
</style>
