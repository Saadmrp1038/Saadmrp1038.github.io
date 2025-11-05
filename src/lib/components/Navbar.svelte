<script>
	import { page } from '$app/stores';
	
	let menuOpen = $state(false);
	let scrolled = $state(false);
	
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 20;
		});
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
	
	function isActive(path) {
		return $page.url.pathname === path;
	}
</script>

<header class="sticky top-0 z-50 bg-white transition-shadow duration-300 {scrolled ? 'shadow-sm' : ''} border-b border-gray-200">
	<nav class="max-w-6xl mx-auto px-6 py-6">
		<div class="flex items-center justify-between">
			<!-- Name with better typography -->
			<a href="/" class="group">
				<h1 class="text-xl font-medium tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
					Saad Mohammad Rafid Pial
				</h1>
			</a>

			<!-- Desktop Navigation with underline effect -->
			<div class="hidden md:flex items-center gap-10">
				<a 
					href="/" 
					class="relative transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:bg-gray-900 after:transition-all after:duration-200 pb-1 {isActive('/') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}"
				>
					About
				</a>
				<a 
					href="/research" 
					class="relative transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:bg-gray-900 after:transition-all after:duration-200 pb-1 {isActive('/research') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}"
				>
					Research
				</a>
				<a 
					href="/projects" 
					class="relative transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:bg-gray-900 after:transition-all after:duration-200 pb-1 {isActive('/projects') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}"
				>
					Projects
				</a>
				<a 
					href="/contact" 
					class="relative transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-px after:bg-gray-900 after:transition-all after:duration-200 pb-1 {isActive('/contact') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}"
				>
					Contact
				</a>
			</div>

			<!-- Mobile menu button -->
			<button
				type="button"
				onclick={toggleMenu}
				class="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
				aria-label="Menu"
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

		<!-- Mobile Navigation with slide effect -->
		<div class="md:hidden overflow-hidden transition-all duration-300 ease-in-out {menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}">
			<div class="pt-4 mt-4 border-t border-gray-200 space-y-3">
				<a 
					href="/" 
					class="block hover:translate-x-1 transition-all duration-200 {isActive('/') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}"
				>
					About
				</a>
				<a 
					href="/research" 
					class="block hover:translate-x-1 transition-all duration-200 {isActive('/research') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}"
				>
					Research
				</a>
				<a 
					href="/projects" 
					class="block hover:translate-x-1 transition-all duration-200 {isActive('/projects') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}"
				>
					Projects
				</a>
				<a 
					href="/contact" 
					class="block hover:translate-x-1 transition-all duration-200 {isActive('/contact') ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}"
				>
					Contact
				</a>
			</div>
		</div>
	</nav>
</header>