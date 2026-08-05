<script>
	/* Repository-owned URLs and SVG constants are trusted inputs for this component. */
	/* eslint-disable svelte/no-navigation-without-resolve, svelte/no-at-html-tags */
	let { href, label, icon, external = true } = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	aria-label={label}
	class="group flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-md transition-all duration-200 lg:min-h-0 lg:min-w-0 lg:justify-start lg:rounded-none"
	style="color: var(--text-primary);"
>
	<span>
		{@html icon}
	</span>
	<span class="hidden group-hover:underline lg:inline">{label}</span>
</a>
