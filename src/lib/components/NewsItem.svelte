<script>
	let { date, description } = $props();
</script>

<div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
	<span class="shrink-0 text-xs font-medium tracking-wide uppercase sm:min-w-[80px]" style="font-family: 'JetBrains Mono', 'Fira Code', monospace; font-weight: 500; font-feature-settings: 'liga' 1, 'calt' 1; color: var(--text-muted);">
		{date}
	</span>
	<p class="text-sm sm:text-base leading-relaxed flex-1" style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);">{@html description}</p>
</div>

