<script>
	import '../app.css';
	import titleImage from '$lib/assets/pixelized.png';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Saad Mohammad Rafid Pial</title>
	<meta
		name="description"
		content="Portfolio of Saad Mohammad Rafid Pial, a software engineer and AI systems researcher working on AIOps, site reliability engineering, and cloud reliability."
	/>
	<meta name="author" content="Saad Mohammad Rafid Pial" />
	<meta property="og:title" content="Saad Mohammad Rafid Pial" />
	<meta
		property="og:description"
		content="Software engineer and AI systems researcher working on AIOps, site reliability engineering, and cloud reliability."
	/>
	<meta property="og:type" content="website" />
	<link rel="icon" href={titleImage} />
</svelte:head>

<!-- Background Gradient Blobs for Glassmorphism Effect -->
<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
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
