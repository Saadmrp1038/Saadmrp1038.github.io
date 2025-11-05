<script>
	let { date, description } = $props();
</script>

<div class="flex flex-col gap-2 sm:flex-row sm:items-baseline">
	<span class="shrink-0 text-xs font-medium tracking-wide text-gray-500 dark:text-slate-500 uppercase">
		{date}
	</span>
	<p class="leading-relaxed text-gray-900 dark:text-slate-100">{description}</p>
</div>

