<script>
	import '../app.css';
	import titleImage from '$lib/assets/pixelized.png';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Saad Mohammad Rafid Pial</title>
	<meta name="author" content="Saad Mohammad Rafid Pial" />
	<meta property="og:title" content="Saad Mohammad Rafid Pial" />
	<meta
		property="og:description"
		content="MSCS student at UIUC researching AI for systems, site reliability engineering, cloud reliability, and formal methods."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://saadmrp1038.github.io/courage-og.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="720" />
	<meta property="og:image:height" content="720" />
	<meta
		property="og:image:alt"
		content="Courage the Cowardly Dog illustration with an encouraging quote around its circular border"
	/>
	<meta name="twitter:card" content="summary" />
	<link rel="icon" href={titleImage} />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

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
<div class="site-content">
	{@render children()}
</div>
