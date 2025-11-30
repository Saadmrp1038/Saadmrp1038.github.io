<script>
	import PublicationCard from '$lib/components/PublicationCard.svelte';

	const publications = [
		{
			title: 'Trace2Script: A Framework for Web UI Test Script Generation from Natural Language Test Cases',
			authors: 'Co-first author',
			venue: 'Under review at FSE 2026',
			year: '2025',
			links: {
				// PDF: 'https://arxiv.org/abs/2501.00000'
			},
			abstract:
				'Automatic Web UI testing is essential for rapid regression testing within continuous development cycles. However, test scripts often rely on UI object locators that must be updated when DOM elements change, making test script maintenance a brittle and time-consuming process. While recent LLM-based approaches promise automation, they produce non-deterministic and unreliable code that is often error-prone and fails to execute. To address these challenges, we introduce Trace2Script, a novel two-stage architecture that generates robust and maintainable test scripts from natural language by decoupling the non-deterministic web traversal phase from the deterministic script generation phase. Trace2Script uses an LLM-guided web agent to execute natural language instructions and capture raw interaction traces, including initially fragile locators (e.g., absolute XPaths). A heuristic, rule-based algorithm then processes this trace, converting it into a deterministic executable test script with robust, human-readable locators. We evaluated Trace2Script on 445 test cases from 19 production websites. It successfully executed 84% of these cases, and for all correctly executed traces, it deterministically generated the corresponding robust test scripts. Our generated scripts demonstrated superior robustness to UI changes, maintaining a 90% success rate under structural modifications, significantly outperforming traditional record-and-replay tools. Furthermore, an industry survey with 15 engineers confirmed the scripts meet professional standards for robustness and maintainability, reducing test generation time by up to 10x compared to manual efforts.'
		},
		{
			title:
				'NuevAI: Streamlined Dataset Generator and Human Evaluator System for Development of Pedagogical Conversational Agents',
			authors: 'Second author',
			venue: 'CHItaly 2025',
			year: '2025',
			links: {
				PDF: 'https://dl.acm.org/doi/10.1145/3750069.3750094'
			},
			abstract:
				'The development of Pedagogical Conversational Agents (PCAs) made significant progress due to the rise of Large Language Models (LLMs). Yet, creating and evaluating PCAs remains a technically challenging task for educators. Our work presents a semi-autonomous system, NuevAI; designed to democratize the access to AI-enhanced educational tools by simplifying the development of PCAs. NuevAI consists of two complementary platforms that help educators create structured, multi-turn conversational datasets from various data sources for fine-tuning LLMs and also facilitates systematic assessment of PCA conversations by learners. From the evaluation of 16 educators from STEM subjects, our system shows notable improvements compared to traditional methods: 74.5% usability score (vs. 50.9% baseline), 81.2% task efficiency (vs. 49.1%), and 80.8% time efficiency (vs. 32.5% baseline). The system achieved a Net Promoter Score of 68.8% (vs. -62.5% baseline) and reduced cognitive workload by 40% as measured by NASA-TLX assessment. By providing user-friendly and intuitive interfaces and automated workflows, NuevAI empowers educators to create adaptive learning tools through PCAs, aligned with specific pedagogical objectives without requiring technical expertise in the field of AI.'
		}
	];
</script>

<main class="min-h-screen" style="background-color: var(--bg-main);">
	<div class="mx-auto max-w-6xl px-3 sm:px-6 py-4 sm:py-8 md:py-12">
		<h1
			class="mb-4 sm:mb-8 border-b pb-1.5 sm:pb-2 text-xl sm:text-3xl font-bold"
			style="font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); border-color: var(--border-glass);"
		>
			Publications
		</h1>
		<div class="space-y-2 sm:space-y-4">
			{#each publications as publication}
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

