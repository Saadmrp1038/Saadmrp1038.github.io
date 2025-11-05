<script>
	import NavLink from './NavLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	
	let menuOpen = $state(false);
	let scrolled = $state(false);
	let menuButtonRef = $state(null);
	
	const navItems = [
		{ href: '/', label: 'About' },
		{ href: '/research', label: 'Research' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/contact', label: 'Contact' }
	];
	
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 20;
		});
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function handleMenuKeydown(event) {
		if (event.key === 'Escape' && menuOpen) {
			menuOpen = false;
			menuButtonRef?.focus();
		}
	}

	$effect(() => {
		if (menuOpen && typeof window !== 'undefined') {
			window.addEventListener('keydown', handleMenuKeydown);
			return () => {
				window.removeEventListener('keydown', handleMenuKeydown);
			};
		}
	});
</script>

<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:dark:bg-slate-900 focus:text-gray-900 focus:dark:text-slate-100 focus:border focus:border-gray-300 focus:dark:border-slate-700 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:dark:ring-slate-100">
	Skip to main content
</a>
<header class="sticky top-0 z-50 bg-white dark:bg-slate-900 transition-shadow duration-300 {scrolled ? 'shadow-sm' : ''} border-b border-gray-200 dark:border-slate-700">
	<nav class="max-w-6xl mx-auto px-6 py-6" aria-label="Main navigation">
		<div class="flex items-center justify-between">
			<!-- Name with better typography -->
			<a href="/" class="group" aria-label="Home - Saad Mohammad Rafid Pial">
				<h1 class="text-xl font-medium tracking-tight text-gray-900 dark:text-slate-100 group-hover:text-gray-600 dark:group-hover:text-slate-300 transition-colors duration-200">
					Saad Mohammad Rafid Pial
				</h1>
			</a>

			<!-- Desktop Navigation with underline effect -->
			<div class="hidden md:flex items-center gap-10">
				{#each navItems as item}
					<NavLink href={item.href} label={item.label} variant="desktop" />
				{/each}
				<ThemeToggle variant="desktop" />
			</div>

			<!-- Mobile menu button and theme toggle -->
			<div class="md:hidden flex items-center gap-2">
				<ThemeToggle variant="mobile" />
				<button
					type="button"
					onclick={toggleMenu}
					bind:this={menuButtonRef}
					class="p-2 -mr-2 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:dark:ring-slate-100 focus:ring-offset-2 focus:dark:ring-offset-slate-900 rounded"
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
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
		<div
			id="mobile-menu"
			class="md:hidden overflow-hidden transition-all duration-300 ease-in-out {menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}"
			aria-hidden={!menuOpen}
			role="menu"
		>
			<div class="pt-4 mt-4 border-t border-gray-200 dark:border-slate-700 space-y-3">
				{#each navItems as item}
					<NavLink href={item.href} label={item.label} variant="mobile" />
				{/each}
			</div>
		</div>
	</nav>
</header>