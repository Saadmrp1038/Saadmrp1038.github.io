<script>
	let { quote, author, imageUrl } = $props();
</script>

<div class="my-4">
	<blockquote
		class="rounded-r-md py-3 pr-3 pl-4 text-sm sm:text-base"
		style="font-family: 'Inter', sans-serif; font-style: italic; line-height: 1.7; border-left: 3px solid var(--accent); background: rgba(217, 119, 6, 0.05); color: var(--text-primary);"
	>
		<p class="mb-2">
			{quote}
		</p>
		<footer
			class="flex items-center gap-2 text-xs not-italic"
			style="font-family: 'Inter', sans-serif; color: var(--text-muted);"
		>
			<span>— {author}</span>
			{#if imageUrl}
				<button
					onclick={() => window.open(imageUrl, '_blank')}
					class="p-1 transition-colors"
					style="color: var(--text-muted);"
					title="View Courage image"
					aria-label="Open Courage image in a new tab"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</button>
			{/if}
		</footer>
	</blockquote>
</div>

<style>
	:global(.dark) blockquote {
		background: transparent;
	}
</style>
