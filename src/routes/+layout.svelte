<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import titleImage from '$lib/assets/pixelized.png';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={titleImage} />
</svelte:head>

<!-- Background Gradient Blobs for Glassmorphism Effect -->
<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
	<!-- Top-Left Amber Blob -->
	<div
		class="absolute rounded-full"
		style="top: -10%; left: -10%; width: 50vw; height: 50vw; filter: blur(100px); background-color: var(--blob-amber);"
	></div>
	<!-- Bottom-Right Indigo Blob -->
	<div
		class="absolute rounded-full"
		style="bottom: -10%; right: -10%; width: 50vw; height: 50vw; filter: blur(100px); background-color: var(--blob-indigo);"
	></div>
</div>

<Navbar />
<div style="padding-top: 80px;">
	{@render children()}
</div>
