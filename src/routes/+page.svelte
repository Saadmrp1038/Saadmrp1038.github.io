<script>
	import profilePic from '$lib/assets/profile-2.jpg';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import NewsItem from '$lib/components/NewsItem.svelte';

	const socialLinks = [
		{
			href: 'mailto:saadmrp@gmail.com',
			label: 'Email',
			icon: '<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
			external: false
		},
		{
			href: 'https://github.com/yourusername',
			label: 'GitHub',
			icon: '<svg class="h-4 w-4" fill="#181717" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>'
		},
		{
			href: 'https://linkedin.com/in/yourprofile',
			label: 'LinkedIn',
			icon: '<svg class="h-4 w-4" fill="#0077b5" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>'
		},
		{
			href: 'https://scholar.google.com/citations?user=yourprofile',
			label: 'Google Scholar',
			icon: '<svg class="h-4 w-4" fill="#4285f4" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>'
		}
	];

	const newsItems = [
		{
			date: 'Jul 2025',
			description:
				'Started as Software Engineer at Monsha.AI, working on AI-powered educational tools'
		},
		{
			date: 'May 2025',
			description:
				'Began research internship at UIUC with Prof. Tianyin Xu on cloud system reliability'
		},
		{
			date: 'Apr 2025',
			description: 'Paper on pedagogical conversational agents accepted at CHItaly 2025'
		},
		{ date: 'Mar 2025', description: 'Submitted Trace2Script paper to FSE 2026' },
		{ date: 'Feb 2024', description: 'Won 1st place at SUST CSE Carnival Hackathon' },
		{
			date: 'Nov 2024',
			description:
				'Joined Zelf AI as Software Engineer, working on large-scale scraping infrastructure'
		},
		{ date: 'Oct 2024', description: 'Reached Candidate Master (1900+) on Codeforces' }
	];
</script>

<main class="min-h-screen bg-white dark:bg-slate-900">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 md:py-20">
		<div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
			<!-- Left Column: Profile Image, Title, and Social Links -->
			<div class="lg:w-1/3 shrink-0">
				<div>
					<div class="mb-6 flex justify-center lg:justify-start">
						<img
							src={profilePic}
							alt="Saad Mohammad Rafid Pial"
							class="h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-gray-200 object-cover shadow-sm dark:border-slate-700"
						/>
					</div>
					<div class="text-center lg:text-left">
						<!-- <h1
							class="mb-3 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100"
						>
							Saad Mohammad Rafid Pial
						</h1> -->
						<p class="mb-6 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-slate-400">
							Recent graduate from BUET · Research Intern at UIUC · Software Engineer at Monsha.AI
						</p>
						<div class="flex flex-row lg:flex-col gap-4 lg:gap-2 justify-center lg:items-start">
							{#each socialLinks as link}
								<SocialLink
									href={link.href}
									label={link.label}
									icon={link.icon}
									external={link.external}
								/>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column: About Me, Research Interests, News and Updates -->
			<div class="lg:w-2/3 flex-1">
				<!-- About Me -->
				<div class="mb-8 sm:mb-10">
					<h2
						class="mb-4 sm:mb-6 border-b border-gray-200 pb-2 text-xl sm:text-2xl font-semibold text-gray-900 dark:border-slate-700 dark:text-slate-100"
					>
						About Me
					</h2>
					<div class="prose max-w-none prose-gray dark:prose-invert">
						<p class="mb-0 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-slate-300">
							Hi, I'm Pial. I recently graduated from the Department of Computer Science and Engineering at the Bangladesh University of Engineering and Technology (BUET). I'm currently a research intern at Professor Tianyin Xu's lab at UIUC, working on AI-driven tools to improve reliability and security in real-world software systems. My work bridges academic research and industry experience, having built scalable systems at both small and mid-level startups.
						</p>
					</div>
				</div>

				<!-- News and Updates -->
				<div>
					<h2
						class="mb-4 sm:mb-6 border-b border-gray-200 pb-2 text-xl sm:text-2xl font-semibold text-gray-900 dark:border-slate-700 dark:text-slate-100"
					>
						News and Updates
					</h2>
					<div class="space-y-3 sm:space-y-4">
						{#each newsItems as news}
							<NewsItem date={news.date} description={news.description} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
