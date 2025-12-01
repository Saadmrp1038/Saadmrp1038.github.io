<script>
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	
	let menuOpen = $state(false);
	let scrolled = $state(false);
	
	const navItems = [
		{ href: '/', label: 'About' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/experience', label: 'Experience' },
		// { href: '/projects', label: 'Projects' },
		// { href: '/contact', label: 'Contact' }
	];
	
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 20;
		});
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<header class="glass-panel fixed top-0 left-0 right-0 z-50" style="border-radius: 0; border-left: none; border-right: none; border-top: none;">
	<nav class="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
		<div class="flex items-center justify-between gap-4">
			<!-- Name with better typography and mobile truncation -->
			<a href="/" class="group min-w-0 flex-1">
				<p class="font-medium tracking-tight transition-colors duration-200 truncate" style="font-family: 'Kingsman', cursive; font-size: 2rem; color: var(--text-primary);">
					<span class="hidden sm:inline">Saad Mohammad Rafid Pial</span>
					<span class="sm:hidden">S. M. R. Pial</span>
				</p>
			</a>

			<!-- Desktop Navigation with underline effect -->
			<div class="hidden md:flex items-center gap-10">
				{#each navItems as item}
					<NavLink href={item.href} label={item.label} variant="desktop" />
				{/each}
				<ThemeToggle variant="desktop" />
			</div>

			<!-- Mobile menu button and theme toggle -->
			<div class="md:hidden flex items-center gap-1">
				<ThemeToggle variant="mobile" />
				<button
					type="button"
					onclick={toggleMenu}
					class="p-2.5 -mr-1 rounded-md transition-all duration-200 touch-manipulation"
					style="color: var(--text-muted);"
					aria-label="Menu"
					aria-expanded={menuOpen}
				>
					<svg class="w-6 h-6 transition-transform duration-200 {menuOpen ? 'rotate-90' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
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
		<div class="md:hidden overflow-hidden transition-all duration-300 ease-in-out {menuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}">
			<div class="pt-4 space-y-2" style="border-top: 1px solid var(--border-glass);">
				{#each navItems as item}
					<NavLink href={item.href} label={item.label} variant="mobile" />
				{/each}
			</div>
		</div>
	</nav>
</header>