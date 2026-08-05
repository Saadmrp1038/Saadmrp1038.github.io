<script>
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import uiucLogo from '$lib/assets/logos/uiuc.png';
	import buetLogo from '$lib/assets/logos/buet.png';
	import monshaLogo from '$lib/assets/logos/monsha.png';
	import zelfLogo from '$lib/assets/logos/zelf.png';
	import oleynLogo from '$lib/assets/logos/oleyn.webp';
	import priyoLogo from '$lib/assets/logos/priyo.jpeg';

	const researchExperiences = [
		{
			title: 'Remote Research Intern',
			organization: "Professor Tianyin Xu's Lab",
			organizationUrl: 'https://tianyin.github.io/',
			location: 'University of Illinois Urbana-Champaign',
			dateRange: 'May 2025 – Present',
			description:
				'Working on SREGym, a benchmark framework for evaluating how AI agents detect, localize, and fix cloud-native failures. My contributions include building fault injection modules for OS and hardware-level failures, expanding the Kubernetes misconfiguration library, and modernizing legacy microservice benchmarks. Currently a core contributor to the project',
			project: {
				label: 'SREGym',
				href: 'https://github.com/SREGym/SREGym'
			},
			logo: uiucLogo
		},
		{
			title: 'Research Collaborator',
			organization: "Professor Anindya Iqbal's Lab",
			organizationUrl: 'https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en',
			location: 'BUET',
			dateRange: 'May 2025 – Sep 2025',
			description:
				'Built an agentic framework that converts natural language test specifications for web UIs into executable Playwright scripts. Developed the core algorithm for translating web agent interaction traces into structured test code. Evaluations showed competitive performance against industry-standard tools. Co-first authored a paper currently under review at FSE 2026.',
			logo: buetLogo
		},
		{
			title: 'Undergraduate Researcher',
			organization: "Professor Anindya Iqbal's Lab",
			organizationUrl: 'https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en',
			location: 'BUET',
			dateRange: 'Jul 2024 – May 2025',
			description:
				'Developed NuevAI, a semi-autonomous system for creating pedagogical conversational agents. Designed and ran evaluations to measure system effectiveness. Second author on a paper accepted at CHItaly 2025.',
			logo: buetLogo
		}
	];

	const workExperiences = [
		{
			title: 'Software Engineer (Remote)',
			organization: 'Monsha.AI',
			location: 'US based',
			dateRange: 'Jul 2025 – Present',
			description:
				'Building an AI-powered EdTech platform that generates teaching resources for educators. Developing agentic LLM workflows to handle diverse content requests with built-in quality checks.',
			logo: monshaLogo
		},
		{
			title: 'Software Engineer (Remote)',
			organization: 'Zelf AI',
			location: 'US based',
			dateRange: 'Nov 2024 – Jun 2025',
			description:
				'Built large-scale scraping infrastructure for Instagram and TikTok. Implemented anti-detection measures including distributed token management, device fingerprinting, and TLS fingerprint spoofing. Re-engineered the TikTok scraper to use standalone cryptographic signing, improving performance and reducing complexity.',
			logo: zelfLogo
		},
		{
			title: 'Software Engineer (Remote)',
			organization: 'Oleyn',
			location: 'Singapore based',
			dateRange: 'Jul 2024 – Nov 2025',
			description:
				'Built the core FastAPI backend with 50+ database tables supporting multi-channel messaging across Messenger, Instagram, Telegram, and WhatsApp. Developed a custom WhatsApp automation server, RAG-based AI responses, and bulk messaging infrastructure handling campaigns to 1,000+ recipients with automated analytics.',
			logo: oleynLogo
		},
		{
			title: 'Part-time Software Engineer',
			organization: 'Priyo',
			location: 'Bangladesh based',
			dateRange: 'Jul 2024 – Nov 2024',
			description:
				'Designed backend architecture for the PriyoPay chatbot system with automated web scraping and admin functionality. Helped build the Flutter mobile app including onboarding, dashboard, and card management systems. Integrated Persona for identity verification and MarqetaJS for safe financial data processing.',
			logo: priyoLogo
		}
	];
</script>

<main class="min-h-screen" style="background-color: var(--bg-main);">
	<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:py-20">
		<!-- Research Experience Section -->
		<div class="mb-12 sm:mb-16">
			<h1
				class="mb-8 border-b pb-3 text-2xl font-bold sm:mb-10 sm:text-3xl"
				style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); border-color: var(--border-glass);"
			>
				Research Experience
			</h1>
			<div class="space-y-4 sm:space-y-6">
				{#each researchExperiences as experience (`${experience.organization}-${experience.title}`)}
					<ExperienceCard
						title={experience.title}
						organization={experience.organization}
						organizationUrl={experience.organizationUrl}
						location={experience.location}
						dateRange={experience.dateRange}
						description={experience.description}
						project={experience.project}
						logo={experience.logo}
					/>
				{/each}
			</div>
		</div>

		<!-- Work Experience Section -->
		<div>
			<h1
				class="mb-8 border-b pb-3 text-2xl font-bold sm:mb-10 sm:text-3xl"
				style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); border-color: var(--border-glass);"
			>
				Work Experience
			</h1>
			<div class="space-y-4 sm:space-y-6">
				{#each workExperiences as experience (`${experience.organization}-${experience.title}`)}
					<ExperienceCard
						title={experience.title}
						organization={experience.organization}
						location={experience.location}
						dateRange={experience.dateRange}
						description={experience.description}
						logo={experience.logo}
					/>
				{/each}
			</div>
		</div>
	</div>
</main>
