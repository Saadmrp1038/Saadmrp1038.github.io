<script>
	let { href, label, icon, external = true } = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="group flex items-center gap-1.5 text-gray-700 dark:text-slate-300 transition-all duration-200"
>
	<span>
		{@html icon}
	</span>
	<span class="hidden lg:inline group-hover:underline">{label}</span>
</a>

