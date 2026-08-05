<script>
	let { title, description, location } = $props();
</script>

<div class="glass-panel p-4 sm:p-6">
	<div class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
		<h3
			class="text-base font-semibold sm:text-lg"
			style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary);"
		>
			{title}
		</h3>
		<span
			class="inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-medium sm:px-3"
			style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-weight: 500; font-size: 0.85rem; color: var(--text-muted); background-color: var(--tag-bg); border: 1px solid var(--tag-border);"
		>
			{location}
		</span>
	</div>
	<p
		class="text-sm leading-relaxed sm:text-base"
		style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);"
	>
		{description}
	</p>
</div>
