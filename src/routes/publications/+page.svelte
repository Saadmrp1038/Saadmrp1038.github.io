<script>
	import PublicationCard from '$lib/components/PublicationCard.svelte';

	const publications = [
		{
			title: 'Specula: Scaling Formal Specifications for Autonomous Model Checking of System Code',
			authors: [
				{ name: 'Q Cheng' },
				{ name: 'SMR Pial', self: true },
				{ name: 'R Tang' },
				{ name: 'Y Su' },
				{ name: 'E Ma' },
				{ name: 'F Hackett' },
				{ name: 'I Beschastnikh' },
				{ name: 'Y Huang' },
				{ name: 'T Xu' }
			],
			venue: 'arXiv',
			year: '2026',
			links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2607.25333' }],
			abstract:
				'Specula is an autonomous agentic system that generates TLA+ specifications for complex system code and uses them for model checking and bug finding. Its self-evolving workflow improves specification quality while reducing hallucinations and reward hacking. An evaluation across 48 open-source systems found 249 bugs, including deep issues that are difficult to uncover with conventional approaches.'
		},
		{
			title:
				'EduPresenta: A Conversational AI Agent for Pedagogically Sound Presentation Generation for Instructors',
			authors: [
				{ name: 'SK Shantanu', coFirst: true },
				{ name: 'SMR Pial', self: true, coFirst: true },
				{ name: 'S Sharmin' }
			],
			venue: 'HCII',
			year: '2026',
			links: [
				{
					label: 'DOI',
					href: 'https://doi.org/10.1007/978-3-032-30784-2_19'
				}
			],
			abstract:
				'EduPresenta is a conversational AI system for creating presentation slides aligned with pedagogical goals such as learning objectives, Bloom’s Taxonomy, depth of knowledge, and outcome-based education. An evaluation with undergraduate STEM instructors found that the system can produce appealing presentations, while human guidance remains important for maintaining pedagogical alignment.'
		},
		{
			title: 'SREGym: A Live Benchmark for AI SRE Agents with High-Fidelity Failure Scenarios',
			authors: [
				{ name: 'J Clark', coFirst: true },
				{ name: 'Y Su', coFirst: true },
				{ name: 'SMR Pial', self: true },
				{ name: 'Y Tian' },
				{ name: 'L Gniedziejko' },
				{ name: 'H Jacobsen' },
				{ name: 'Y Chen' },
				{ name: 'T Xu' }
			],
			venue: 'arXiv',
			year: '2026',
			links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2605.07161' }],
			abstract:
				'SREGym is a live benchmark for evaluating AI agents on realistic cloud failures. It combines real cloud-native stacks with fault and noise injectors to model failures across system layers, including correlated and metastable failures. The benchmark currently contains 90 challenging SRE problems and reveals substantial differences in how frontier agents diagnose and mitigate incidents.'
		},
		{
			title: 'SREGym: A Live Training Ground for AI SRE Agents with High-Fidelity Failure Drills',
			authors: [
				{ name: 'J Clark' },
				{ name: 'Y Su' },
				{ name: 'SMR Pial', self: true },
				{ name: 'L Gniedziejko' },
				{ name: 'T Xu' }
			],
			venue: 'ACM CAIS',
			year: '2026',
			links: [
				{
					label: 'DOI',
					href: 'https://doi.org/10.1145/3786335.3813208'
				}
			],
			abstract:
				'SREGym is a new benchmark for AI-driven SRE (Site Reliability Engineering) techniques for diagnosing and mitigating production failures. SREGym provides a live training ground where high-fidelity failure drills are emulated through fault injectors. SREGym differs from existing SRE benchmarks such as AIOpsLab and ITBench in its realization of comprehensive, high-fidelity failure drills. SREGym implements an extensible software architecture that orchestrates fault injectors and simulators across system stacks, with new capabilities: (1) simulating low-level faults in OS kernels and hardware, (2) coordinating multiple concurrent events into compound drills, and (3) composing noises to model production environments. We demonstrate how to use and extend SREGym and present three representative cases of how AI agents tackle SREGym problems.'
		},
		{
			title:
				'NuevAI: Streamlined Dataset Generator and Human Evaluator System for Development of Pedagogical Conversational Agents',
			authors: [{ name: 'S Sayeed' }, { name: 'SMR Pial', self: true }, { name: 'A Iqbal' }],
			venue: 'CHItaly',
			year: '2025',
			links: [
				{
					label: 'DOI',
					href: 'https://doi.org/10.1145/3750069.3750094'
				}
			],
			abstract:
				'The development of Pedagogical Conversational Agents (PCAs) made significant progress due to the rise of Large Language Models (LLMs). Yet, creating and evaluating PCAs remains a technically challenging task for educators. Our work presents a semi-autonomous system, NuevAI; designed to democratize the access to AI-enhanced educational tools by simplifying the development of PCAs. NuevAI consists of two complementary platforms that help educators create structured, multi-turn conversational datasets from various data sources for fine-tuning LLMs and also facilitates systematic assessment of PCA conversations by learners. From the evaluation of 16 educators from STEM subjects, our system shows notable improvements compared to traditional methods: 74.5% usability score (vs. 50.9% baseline), 81.2% task efficiency (vs. 49.1%), and 80.8% time efficiency (vs. 32.5% baseline). The system achieved a Net Promoter Score of 68.8% (vs. -62.5% baseline) and reduced cognitive workload by 40% as measured by NASA-TLX assessment. By providing user-friendly and intuitive interfaces and automated workflows, NuevAI empowers educators to create adaptive learning tools through PCAs, aligned with specific pedagogical objectives without requiring technical expertise in the field of AI.'
		}
	];
</script>

<main class="min-h-screen" style="background-color: var(--bg-main);">
	<div class="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-8 md:py-12">
		<h1
			class="mb-4 border-b pb-1.5 text-xl font-bold sm:mb-8 sm:pb-2 sm:text-3xl"
			style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); border-color: var(--border-glass);"
		>
			Publications
		</h1>
		<div class="space-y-2 sm:space-y-4">
			{#each publications as publication (publication.title)}
				<PublicationCard
					title={publication.title}
					authors={publication.authors}
					venue={publication.venue}
					year={publication.year}
					links={publication.links}
					abstract={publication.abstract}
				/>
			{/each}
		</div>
	</div>
</main>
