<script>
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import uiucLogo from '$lib/assets/logos/uiuc.png';
	import buetLogo from '$lib/assets/logos/buet.png';
	import monshaLogo from '$lib/assets/logos/monsha.png';
	import zelfLogo from '$lib/assets/logos/zelf.png';
	import oleynLogo from '$lib/assets/logos/oleyn.webp';
	import priyoLogo from '$lib/assets/logos/priyo.jpeg';

	// const researchExperiences = [
	// 	{
	// 		title: 'Remote Research Intern',
	// 		organization: "Professor Tianyin Xu's Lab",
	// 		organizationUrl: 'https://tianyin.github.io/',
	// 		location: 'University of Illinois Urbana-Champaign',
	// 		dateRange: 'May 2025 – Present',
	// 		description:
	// 			'Developing SREGym, UIUC’s AI-native benchmark framework for evaluating SRE agents, to systematically assess detection, localization, and mitigation of realistic cloud-native failures. My work here included developing low-level fault injection modules to simulate OS and hardware-level failures, expanding Kubernetes misconfiguration libraries, modernizing legacy microservice benchmarks. Currently serving as a core contributor to the project (<a class="text-blue-600 dark:text-sky-400 font-medium hover:underline" href="https://github.com/SREGym/SREGym" target="_blank" rel="noopener noreferrer">SREGym</a>).',
	// 		type: 'research',
	// 		logo: uiucLogo
	// 	},
	// 	{
	// 		title: 'Research Collaborator',
	// 		organization: "Professor Anindya Iqbal's Lab",
	// 		organizationUrl: 'https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en',
	// 		location: 'BUET',
	// 		dateRange: 'May 2025 – Sep 2025',
	// 		description:
	// 			'Designed and developed a novel agentic framework that autonomously translates natural language test specifications for web UIs into executable Playwright scripts. Implemented the core translation algorithm converting web agent interaction traces into structured test scripts, with evaluations demonstrating competitive performance against industry-standard tools. Co-first authored a paper under review at FSE 2026.',
	// 		type: 'research',
	// 		logo: buetLogo
	// 	},
	// 	{
	// 		title: 'Undergraduate Researcher',
	// 		organization: "Professor Anindya Iqbal's Lab",
	// 		organizationUrl: 'https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en',
	// 		location: 'BUET',
	// 		dateRange: 'Jul 2024 – May 2025',
	// 		description:
	// 			'Developed NuevAI, a semi-autonomous system for creating Pedagogical Conversational Agents. Designed and conducted comprehensive evaluations to assess system effectiveness, resulting in a second-authored paper accepted at the 16th Biannual CHItaly 2025.',
	// 		type: 'research',
	// 		logo: buetLogo
	// 	}
	// ];

	// const workExperiences = [
	// 	{
	// 		title: 'Software Engineer (Remote)',
	// 		organization: 'Monsha.AI',
	// 		location: 'US based',
	// 		dateRange: 'Jul 2025 – Present',
	// 		description:
	// 			'Building an AI-powered EdTech platform that creates teaching resources and materials for educators. Developing agentic LLM workflows to address diverse educational needs, enabling dynamic resource creation with integrated quality assurance mechanisms.',
	// 		type: 'work',
	// 		logo: monshaLogo
	// 	},
	// 	{
	// 		title: 'Software Engineer (Remote)',
	// 		organization: 'Zelf AI',
	// 		location: 'US based',
	// 		dateRange: 'Nov 2024 – Jun 2025',
	// 		description:
	// 			'Developed large-scale scraping infrastructure for Instagram and TikTok, implementing advanced anti-bot detection countermeasures including distributed token management, device fingerprinting, and TLS fingerprint spoofing. Re-engineered TikTok scraping to use stand-alone cryptographic signing, significantly improving performance and reducing system complexity.',
	// 		type: 'work',
	// 		logo: zelfLogo
	// 	},
	// 	{
	// 		title: 'Software Engineer (Remote)',
	// 		organization: 'Oleyn',
	// 		location: 'Singapore based',
	// 		dateRange: 'Jul 2024 – Feb 2025',
	// 		description:
	// 			'Designed and implemented core FastAPI backend with 50+ database tables supporting multi-channel communication across Messenger, Instagram, Telegram, and WhatsApp. Built custom WhatsApp automation server, developed RAG systems for context-aware AI responses, and implemented bulk messaging infrastructure supporting campaigns to 1,000+ recipients with automated analytics.',
	// 		type: 'work',
	// 		logo: oleynLogo
	// 	},
	// 	{
	// 		title: 'Part-time Software Engineer',
	// 		organization: 'Priyo',
	// 		location: 'Bangladesh based',
	// 		dateRange: 'Jul 2024 – Nov 2024',
	// 		description:
	// 			'Designed backend architecture for PriyoPay chatbot system with automated web scraping and comprehensive admin/client functionality. Developed Flutter mobile app with complete onboarding flow, dashboard, and card management. Integrated third-party services including Persona verification and MarqetaJS for secure financial operations.',
	// 		type: 'work',
	// 		logo: priyoLogo
	// 	}
	// ];

	const researchExperiences = [
		{
			title: 'Remote Research Intern',
			organization: "Professor Tianyin Xu's Lab",
			organizationUrl: 'https://tianyin.github.io/',
			location: 'University of Illinois Urbana-Champaign',
			dateRange: 'May 2025 – Present',
			description:
				'Working on SREGym, a benchmark framework for evaluating how AI agents detect, localize, and fix cloud-native failures. My contributions include building fault injection modules for OS and hardware-level failures, expanding the Kubernetes misconfiguration library, and modernizing legacy microservice benchmarks. Currently a core contributor to the project (<a class="text-blue-600 dark:text-sky-400 font-medium hover:underline" href="https://github.com/SREGym/SREGym" target="_blank" rel="noopener noreferrer">SREGym</a>).',
			type: 'research',
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
			type: 'research',
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
			type: 'research',
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
			type: 'work',
			logo: monshaLogo
		},
		{
			title: 'Software Engineer (Remote)',
			organization: 'Zelf AI',
			location: 'US based',
			dateRange: 'Nov 2024 – Jun 2025',
			description:
				'Built large-scale scraping infrastructure for Instagram and TikTok. Implemented anti-detection measures including distributed token management, device fingerprinting, and TLS fingerprint spoofing. Re-engineered the TikTok scraper to use standalone cryptographic signing, improving performance and reducing complexity.',
			type: 'work',
			logo: zelfLogo
		},
		{
			title: 'Software Engineer (Remote)',
			organization: 'Oleyn',
			location: 'Singapore based',
			dateRange: 'Jul 2024 – Feb 2025',
			description:
				'Built the core FastAPI backend with 50+ database tables supporting multi-channel messaging across Messenger, Instagram, Telegram, and WhatsApp. Developed a custom WhatsApp automation server, RAG-based AI responses, and bulk messaging infrastructure handling campaigns to 1,000+ recipients with automated analytics.',
			type: 'work',
			logo: oleynLogo
		},
		{
			title: 'Part-time Software Engineer',
			organization: 'Priyo',
			location: 'Bangladesh based',
			dateRange: 'Jul 2024 – Nov 2024',
			description:
				'Designed backend architecture for the PriyoPay chatbot system with automated web scraping and admin functionality. Helped build the Flutter mobile app including onboarding, dashboard, and card management systems. Integrated Persona for identity verification and MarqetaJS for safe financial data processing.',
			type: 'work',
			logo: priyoLogo
		}
	];
</script>

<main class="min-h-screen bg-white dark:bg-slate-900">
	<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:py-20">
		<!-- Research Experience Section -->
		<div class="mb-12 sm:mb-16">
			<h1
				class="mb-8 border-b border-gray-200 pb-3 text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl dark:border-slate-700 dark:text-slate-100"
			>
				Research Experience
			</h1>
			<div class="space-y-4 sm:space-y-6">
				{#each researchExperiences as experience}
					<ExperienceCard
						title={experience.title}
						organization={experience.organization}
						organizationUrl={experience.organizationUrl}
						location={experience.location}
						dateRange={experience.dateRange}
						description={experience.description}
						type={experience.type}
						logo={experience.logo}
					/>
				{/each}
			</div>
		</div>

		<!-- Work Experience Section -->
		<div>
			<h1
				class="mb-8 border-b border-gray-200 pb-3 text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl dark:border-slate-700 dark:text-slate-100"
			>
				Work Experience
			</h1>
			<div class="space-y-4 sm:space-y-6">
				{#each workExperiences as experience}
					<ExperienceCard
						title={experience.title}
						organization={experience.organization}
						location={experience.location}
						dateRange={experience.dateRange}
						description={experience.description}
						type={experience.type}
						logo={experience.logo}
					/>
				{/each}
			</div>
		</div>
	</div>
</main>
