<script>
	let { quote, author, imageUrl } = $props();
</script>

<div class="relative my-4">
	<blockquote class="border-l-4 border-gray-300 dark:border-slate-600 pl-4 italic text-sm sm:text-base text-gray-600 dark:text-slate-400">
		<p class="mb-2">
			{quote}
		</p>
		<footer class="not-italic text-xs text-gray-500 dark:text-slate-500">
			— {author}
		</footer>
	</blockquote>
	{#if imageUrl}
		<button
			on:click={() => window.open(imageUrl, '_blank')}
			class="absolute top-0 right-0 p-1 text-gray-400 hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
			title="View image"
			aria-label="Open image in new tab"
		>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		</button>
	{/if}
</div>

