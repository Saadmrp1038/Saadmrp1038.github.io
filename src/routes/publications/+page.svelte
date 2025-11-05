<script>
	import PublicationCard from '$lib/components/PublicationCard.svelte';

	const publications = [
		{
			title: 'Trace2Script: A Framework for Web UI Test Script Generation from Natural Language Test Cases',
			authors: 'Co-first author',
			venue: 'Under review at FSE 2026',
			year: '2025',
			links: {}
		},
		{
			title:
				'NuevAI: Streamlined Dataset Generator and Human Evaluator System for Development of Pedagogical Conversational Agents',
			authors: 'Second author',
			venue: 'CHItaly 2025',
			year: '2025',
			links: {}
		}
	];
</script>

<main class="min-h-screen bg-white dark:bg-slate-900">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 md:py-20">
		<h1
			class="mb-8 sm:mb-10 border-b border-gray-200 pb-3 text-2xl sm:text-3xl font-bold text-gray-900 dark:border-slate-700 dark:text-slate-100"
		>
			Publications
		</h1>
		<div class="space-y-4 sm:space-y-6">
			{#each publications as publication}
				<PublicationCard
					title={publication.title}
					authors={publication.authors}
					venue={publication.venue}
					year={publication.year}
					links={publication.links}
				/>
			{/each}
		</div>
	</div>
</main>

