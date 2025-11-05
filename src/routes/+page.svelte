<script>
	import profilePic from '$lib/assets/profile.jpeg';
</script>

<main class="min-h-screen bg-white">
	<div class="max-w-4xl mx-auto px-6 py-12 md:py-20">
		
		<!-- Hero Section -->
		<div class="mb-16">
			<div class="flex flex-col sm:flex-row gap-8 items-start mb-10">
				<div class="relative">
					<img 
						src={profilePic} 
						alt="Saad Mohammad Rafid Pial" 
						class="w-36 h-36 rounded-full object-cover border-2 border-gray-200 shadow-sm"
					/>
				</div>
				<div class="flex-1">
					<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
						Saad Mohammad Rafid Pial
					</h1>
					<p class="text-lg text-gray-600 mb-6 leading-relaxed">
						Final year Computer Science student at BUET · Research Intern at UIUC · Software Engineer at Monsha.AI
					</p>
					<div class="flex flex-wrap gap-3">
						<a 
							href="mailto:saadmrp@gmail.com" 
							class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							Email
						</a>
						<a 
							href="https://github.com/yourusername" 
							target="_blank" 
							rel="noopener noreferrer" 
							class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
						>
							<svg class="w-4 h-4" fill="#181717" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							GitHub
						</a>
						<a 
							href="https://linkedin.com/in/yourprofile" 
							target="_blank" 
							rel="noopener noreferrer" 
							class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
						>
							<svg class="w-4 h-4" fill="#0077b5" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
							LinkedIn
						</a>
						<a 
							href="https://scholar.google.com/citations?user=yourprofile" 
							target="_blank" 
							rel="noopener noreferrer" 
							class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
						>
							<svg class="w-4 h-4" fill="#4285f4" viewBox="0 0 24 24">
								<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
							</svg>
							Google Scholar
						</a>
					</div>
				</div>
			</div>

			<div class="prose prose-gray max-w-none">
				<p class="text-gray-700 leading-relaxed mb-6 text-base">
					I'm a final-year Computer Science student at Bangladesh University of Engineering and Technology (BUET), 
					expected to graduate in March 2025. Currently, I work as a Software Engineer at Monsha.AI, building AI-powered 
					educational tools, and as a Research Intern at University of Illinois Urbana-Champaign under Professor Tianyin Xu.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6 text-base">
					My research focuses on AI agents for software testing and cloud system reliability. I've co-authored papers 
					on automated test generation and pedagogical AI systems, with work submitted to FSE 2026 and accepted at CHItaly 2025.
				</p>
				<p class="text-gray-700 leading-relaxed text-base">
					Outside of research, I'm passionate about competitive programming—I've reached Candidate Master (1900+ rating) on 
					Codeforces and have won several hackathons. I enjoy building practical systems and have experience with everything 
					from web scraping infrastructure to Kubernetes-based cloud platforms.
				</p>
			</div>
		</div>

		<!-- Research Interests -->
		<div class="mb-16">
			<h2 class="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
				Research Interests
			</h2>
			<div class="flex flex-wrap gap-2">
				<span class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
					AI Agents
				</span>
				<span class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
					Software Testing
				</span>
				<span class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
					Cloud Systems
				</span>
				<span class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
					Fault Injection
				</span>
				<span class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
					Web Automation
				</span>
				<span class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
					ML for Software Engineering
				</span>
			</div>
		</div>

		<!-- Current Work -->
		<div class="mb-16">
			<h2 class="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
				What I'm Working On
			</h2>
			<div class="space-y-4">
				<div class="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
					<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
						<h3 class="text-lg font-semibold text-gray-900">
							Benchmarking AI Agents for Cloud Failures
						</h3>
						<span class="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-full shrink-0">
							@ UIUC
						</span>
					</div>
					<p class="text-gray-600 leading-relaxed">
						Building a benchmark framework to evaluate AI agents' ability to detect and mitigate failures in 
						cloud environments.
					</p>
				</div>

				<div class="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
					<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
						<h3 class="text-lg font-semibold text-gray-900">
							AI-Powered EdTech Platform
						</h3>
						<span class="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-full shrink-0">
							@ Monsha.AI
						</span>
					</div>
					<p class="text-gray-600 leading-relaxed">
						Building teaching resource generation tools using agentic LLM workflows with quality assurance mechanisms.
					</p>
				</div>
			</div>
		</div>

		<!-- News and Updates -->
		<div>
			<h2 class="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
				News and Updates
			</h2>
			<div class="space-y-4">
				<div class="flex flex-col sm:flex-row sm:items-baseline gap-2">
					<span class="text-xs font-medium text-gray-500 uppercase tracking-wide shrink-0">Jul 2025</span>
					<p class="text-gray-900 leading-relaxed">Started as Software Engineer at Monsha.AI, working on AI-powered educational tools</p>
				</div>

				<div class="flex flex-col sm:flex-row sm:items-baseline gap-2">
					<span class="text-xs font-medium text-gray-500 uppercase tracking-wide shrink-0">May 2025</span>
					<p class="text-gray-900 leading-relaxed">Began research internship at UIUC with Prof. Tianyin Xu on cloud system reliability</p>
				</div>

				<div class="flex flex-col sm:flex-row sm:items-baseline gap-2">
					<span class="text-xs font-medium text-gray-500 uppercase tracking-wide shrink-0">Apr 2025</span>
					<p class="text-gray-900 leading-relaxed">Paper on pedagogical conversational agents accepted at CHItaly 2025</p>
				</div>

				<div class="flex flex-col sm:flex-row sm:items-baseline gap-2">
					<span class="text-xs font-medium text-gray-500 uppercase tracking-wide shrink-0">Mar 2025</span>
					<p class="text-gray-900 leading-relaxed">Submitted Trace2Script paper to FSE 2026</p>
				</div>

				<div class="flex flex-col sm:flex-row sm:items-baseline gap-2">
					<span class="text-xs font-medium text-gray-500 uppercase tracking-wide shrink-0">Feb 2024</span>
					<p class="text-gray-900 leading-relaxed">Won 1st place at SUST CSE Carnival Hackathon</p>
				</div>

				<div class="flex flex-col sm:flex-row sm:items-baseline gap-2">
					<span class="text-xs font-medium text-gray-500 uppercase tracking-wide shrink-0">Nov 2024</span>
					<p class="text-gray-900 leading-relaxed">Joined Zelf AI as Software Engineer, working on large-scale scraping infrastructure</p>
				</div>

				<div class="flex flex-col sm:flex-row sm:items-baseline gap-2">
					<span class="text-xs font-medium text-gray-500 uppercase tracking-wide shrink-0">Oct 2024</span>
					<p class="text-gray-900 leading-relaxed">Reached Candidate Master (1900+) on Codeforces</p>
				</div>
			</div>
		</div>

	</div>
</main>