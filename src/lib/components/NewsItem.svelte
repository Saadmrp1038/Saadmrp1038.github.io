<script>
	let { date, description } = $props();
</script>

<div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
	<span class="shrink-0 text-xs font-medium tracking-wide text-gray-500 dark:text-slate-500 uppercase sm:min-w-[80px]">
		{date}
	</span>
	<p class="text-sm sm:text-base leading-relaxed text-gray-900 dark:text-slate-100 flex-1">{@html description}</p>
</div>

