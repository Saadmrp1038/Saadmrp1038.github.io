<script>
	let { title, level = 2 } = $props();
</script>

{#if level === 1}
	<h1
		class="mb-4 border-b pb-2 text-xl font-semibold sm:mb-6 sm:text-2xl"
		style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); border-color: var(--border-glass);"
	>
		{title}
	</h1>
{:else}
	<h2
		class="mb-4 border-b pb-2 text-xl font-semibold sm:mb-6 sm:text-2xl"
		style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); border-color: var(--border-glass);"
	>
		{title}
	</h2>
{/if}
