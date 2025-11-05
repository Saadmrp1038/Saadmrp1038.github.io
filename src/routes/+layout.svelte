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

<Navbar />
{@render children()}
