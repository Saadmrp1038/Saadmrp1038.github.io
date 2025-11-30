<script>
	let { href, label, icon, external = true } = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="group flex items-center gap-1.5 transition-all duration-200"
	style="color: var(--text-primary);"
>
	<span>
		{@html icon}
	</span>
	<span class="hidden lg:inline group-hover:underline">{label}</span>
</a>

