<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import uiucLogo from '$lib/assets/logos/uiuc.png';
	import buetLogo from '$lib/assets/logos/buet.png';
	import monshaLogo from '$lib/assets/logos/monsha.png';
	import zelfLogo from '$lib/assets/logos/zelf.png';
	import oleynLogo from '$lib/assets/logos/oleyn.webp';
	import priyoLogo from '$lib/assets/logos/priyo.jpeg';

	let selectedView = $state('experience');
	let enhanced = $state(false);

	function selectView(view) {
		selectedView = view;
		document.documentElement.dataset.backgroundView = view;
	}

	async function handleViewClick(event, view) {
		if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
			return;
		}

		event.preventDefault();
		selectView(view);
		await goto(resolve(`/experience#${view}`), { noScroll: true, keepFocus: true });
	}

	const educationGroups = [
		{
			organization: 'University of Illinois Urbana-Champaign',
			context: 'Urbana-Champaign, IL',
			logo: uiucLogo,
			logoAlt: 'University of Illinois Urbana-Champaign logo',
			roles: [
				{
					title: 'Master of Science in Computer Science',
					dateRange: 'Aug 2026 – Present',
					description: 'Pursuing graduate studies in Computer Science.'
				}
			]
		},
		{
			organization: 'Bangladesh University of Engineering and Technology',
			context: 'Dhaka, Bangladesh',
			logo: buetLogo,
			logoAlt: 'Bangladesh University of Engineering and Technology logo',
			roles: [
				{
					title: 'Bachelor of Science in Computer Science and Engineering',
					dateRange: '2020 – Mar 2025',
					description: 'Completed my undergraduate degree in Computer Science and Engineering.'
				}
			]
		}
	];

	const experienceGroups = [
		{
			organization: "Professor Tianyin Xu's Lab",
			organizationUrl: 'https://tianyin.github.io/',
			context: 'University of Illinois Urbana-Champaign',
			logo: uiucLogo,
			logoAlt: 'University of Illinois Urbana-Champaign logo',
			roles: [
				{
					title: 'Research Assistant',
					dateRange: 'Aug 2026 – Present',
					description:
						"Working on AI for systems and site reliability engineering in Professor Tianyin Xu's lab."
				},
				{
					title: 'Remote Research Intern',
					dateRange: 'May 2025 – Jul 2026',
					description:
						'Worked on SREGym, a benchmark framework for evaluating how AI agents detect, localize, and fix cloud-native failures. My contributions included building fault injection modules for OS and hardware-level failures, expanding the Kubernetes misconfiguration library, and modernizing legacy microservice benchmarks.',
					project: {
						label: 'SREGym project',
						href: 'https://github.com/SREGym/SREGym'
					}
				}
			]
		},
		{
			organization: 'Monsha.AI',
			context: 'United States · Remote',
			logo: monshaLogo,
			logoAlt: 'Monsha.AI logo',
			roles: [
				{
					title: 'Software Engineer',
					dateRange: 'Jul 2025 – Jul 2026',
					description:
						'Built an AI-powered EdTech platform that generates teaching resources for educators. Developed agentic LLM workflows to handle diverse content requests with built-in quality checks.'
				}
			]
		},
		{
			organization: 'Oleyn',
			context: 'Singapore · Remote',
			logo: oleynLogo,
			logoAlt: 'Oleyn logo',
			roles: [
				{
					title: 'Software Engineer',
					dateRange: 'Jul 2024 – Nov 2025',
					description:
						'Built the core FastAPI backend with 50+ database tables supporting multi-channel messaging across Messenger, Instagram, Telegram, and WhatsApp. Developed a custom WhatsApp automation server, RAG-based AI responses, and bulk messaging infrastructure handling campaigns to 1,000+ recipients with automated analytics.'
				}
			]
		},
		{
			organization: "Professor Anindya Iqbal's Lab",
			organizationUrl: 'https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en',
			context: 'Bangladesh University of Engineering and Technology',
			logo: buetLogo,
			logoAlt: 'Bangladesh University of Engineering and Technology logo',
			roles: [
				{
					title: 'Research Collaborator',
					dateRange: 'May 2025 – Sep 2025',
					description:
						'Built an agentic framework that converts natural language test specifications for web UIs into executable Playwright scripts. Developed the core algorithm for translating web agent interaction traces into structured test code. Evaluations showed competitive performance against industry-standard tools.'
				},
				{
					title: 'Undergraduate Researcher',
					dateRange: 'Jul 2024 – May 2025',
					description:
						'Developed NuevAI, a semi-autonomous system for creating pedagogical conversational agents. Designed and ran evaluations to measure system effectiveness. Second author on a paper accepted at CHItaly 2025.'
				}
			]
		},
		{
			organization: 'Zelf AI',
			context: 'United States · Remote',
			logo: zelfLogo,
			logoAlt: 'Zelf AI logo',
			roles: [
				{
					title: 'Software Engineer',
					dateRange: 'Nov 2024 – Jun 2025',
					description:
						'Built large-scale scraping infrastructure for Instagram and TikTok. Implemented anti-detection measures including distributed token management, device fingerprinting, and TLS fingerprint spoofing. Re-engineered the TikTok scraper to use standalone cryptographic signing, improving performance and reducing complexity.'
				}
			]
		},
		{
			organization: 'Priyo',
			context: 'Bangladesh · Part-time',
			logo: priyoLogo,
			logoAlt: 'Priyo logo',
			roles: [
				{
					title: 'Software Engineer',
					dateRange: 'Jul 2024 – Nov 2024',
					description:
						'Designed backend architecture for the PriyoPay chatbot system with automated web scraping and admin functionality. Helped build the Flutter mobile app including onboarding, dashboard, and card management systems. Integrated Persona for identity verification and MarqetaJS for safe financial data processing.'
				}
			]
		}
	];

	onMount(() => {
		function syncViewFromHash() {
			selectView(window.location.hash === '#education' ? 'education' : 'experience');
		}

		syncViewFromHash();
		enhanced = true;
		window.addEventListener('hashchange', syncViewFromHash);
		window.addEventListener('popstate', syncViewFromHash);

		return () => {
			window.removeEventListener('hashchange', syncViewFromHash);
			window.removeEventListener('popstate', syncViewFromHash);
		};
	});
</script>

<svelte:head>
	<title
		>{selectedView === 'education' ? 'Education' : 'Experience'} | Saad Mohammad Rafid Pial</title
	>
	<meta
		name="description"
		content="Research, industry, and education background of Saad Mohammad Rafid Pial."
	/>
	<link rel="canonical" href="https://saadmrp1038.github.io/experience" />
</svelte:head>

<main id="main-content" class="min-h-screen" style="background-color: var(--bg-main);">
	<div class="background-page mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 md:py-20">
		<h1
			class="mb-5 border-b pb-3 text-2xl font-bold sm:mb-6 sm:text-3xl"
			style="color: var(--text-primary); border-color: var(--border-glass);"
		>
			Background
		</h1>

		<nav
			class="mb-5 border-b sm:mb-6"
			style="border-color: var(--border-glass);"
			aria-label="Background sections"
		>
			<div class="flex gap-6 sm:gap-8">
				{#each ['experience', 'education'] as view (view)}
					{@const selected = selectedView === view}
					<a
						href={resolve(
							view === 'education' ? '/experience#education' : '/experience#experience'
						)}
						onclick={(event) => handleViewClick(event, view)}
						class="inline-flex min-h-11 items-center border-b-2 px-0.5 text-sm font-semibold capitalize transition-colors sm:text-base"
						style="color: {selected
							? 'var(--text-primary)'
							: 'var(--text-muted)'}; border-color: {selected ? 'var(--accent)' : 'transparent'};"
						aria-current={enhanced && selected ? 'location' : undefined}
					>
						{view}
					</a>
				{/each}
			</div>
		</nav>

		<section
			id="experience"
			class="background-section scroll-mt-24"
			aria-labelledby="experience-heading"
		>
			<h2 id="experience-heading" class="sr-only">Experience</h2>
			<div class="glass-panel overflow-hidden">
				{#each experienceGroups as group, index (group.organization)}
					<ExperienceCard {group} divider={index > 0} />
				{/each}
			</div>
		</section>

		<section
			id="education"
			class="background-section mt-8 scroll-mt-24"
			aria-labelledby="education-heading"
		>
			<h2 id="education-heading" class="sr-only">Education</h2>
			<div class="glass-panel overflow-hidden">
				{#each educationGroups as group, index (group.organization)}
					<ExperienceCard {group} divider={index > 0} />
				{/each}
			</div>
		</section>
	</div>
</main>

<style>
	:global(html[data-background-view='experience']) .background-page #education,
	:global(html[data-background-view='education']) .background-page #experience {
		display: none;
	}

	:global(html[data-background-view='education']) .background-page #education {
		margin-top: 0;
	}
</style>
