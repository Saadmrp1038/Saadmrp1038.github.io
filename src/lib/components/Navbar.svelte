<script>
	import { resolve } from '$app/paths';
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let menuOpen = $state(false);

	const navItems = [
		{ href: '/', label: 'About' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/experience', label: 'Experience' }
		// { href: '/projects', label: 'Projects' },
		// { href: '/contact', label: 'Contact' }
	];

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header
	class="navbar-header fixed top-0 right-0 left-0 z-50 backdrop-blur-md"
	style="border-radius: 0; border-left: none; border-right: none; border-top: none; border-bottom: 1px solid var(--border-glass); box-shadow: var(--shadow-glass);"
>
	<nav class="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-6">
		<div class="flex items-center justify-between gap-4">
			<!-- Name with better typography and mobile truncation -->
			<a href={resolve('/')} class="group min-w-0 flex-1">
				<p
					class="truncate font-medium tracking-tight transition-colors duration-200"
					style="font-family: 'Kingsman', cursive; font-size: 2rem; color: var(--text-primary);"
				>
					<span class="hidden sm:inline">Saad Mohammad Rafid Pial</span>
					<span class="sm:hidden">S. M. R. Pial</span>
				</p>
			</a>

			<!-- Desktop Navigation with underline effect -->
			<div class="hidden items-center gap-10 md:flex">
				{#each navItems as item (item.href)}
					<NavLink href={item.href} label={item.label} variant="desktop" />
				{/each}
				<ThemeToggle variant="desktop" />
			</div>

			<!-- Mobile menu button and theme toggle -->
			<div class="flex items-center gap-1 md:hidden">
				<ThemeToggle variant="mobile" />
				<button
					type="button"
					onclick={toggleMenu}
					class="-mr-1 touch-manipulation rounded-md p-2.5 transition-all duration-200"
					style="color: var(--text-muted);"
					aria-label="Menu"
					aria-expanded={menuOpen}
				>
					<svg
						class="h-6 w-6 transition-transform duration-200 {menuOpen ? 'rotate-90' : ''}"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						{#if menuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M3 6h18M3 18h18" />
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation with slide effect -->
		<div
			class="overflow-hidden transition-all duration-300 ease-in-out md:hidden {menuOpen
				? 'mt-4 max-h-60 opacity-100'
				: 'mt-0 max-h-0 opacity-0'}"
		>
			<div
				class="space-y-2 rounded-b-lg pt-4 shadow-lg"
				style="background: var(--bg-main); border-top: 1px solid var(--border-glass);"
			>
				{#each navItems as item (item.href)}
					<div onclick={closeMenu} role="none">
						<NavLink href={item.href} label={item.label} variant="mobile" />
					</div>
				{/each}
			</div>
		</div>
	</nav>
</header>

<style>
	.navbar-header {
		background: rgba(253, 251, 247, 0.9);
	}

	:global(.dark) .navbar-header {
		background: rgba(15, 23, 42, 0.9);
	}
</style>
