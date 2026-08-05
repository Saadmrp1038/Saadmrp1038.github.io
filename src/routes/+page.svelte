<script>
	import profilePic from '$lib/assets/profile-2.jpg';
	import courageImage from '$lib/assets/courage.webp';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import ResearchTag from '$lib/components/ResearchTag.svelte';
	import NewsItem from '$lib/components/NewsItem.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import QuoteBlock from '$lib/components/QuoteBlock.svelte';
	import { getSocialLinks } from '$lib/data/socialLinks.js';
	import {
		RESEARCH_INTERESTS,
		NEWS_ITEMS,
		BIO_TEXT,
		RESEARCH_DESCRIPTION,
		COURAGE_QUOTE
	} from '$lib/data/pageData.js';

	const socialLinks = getSocialLinks();
</script>

<svelte:head>
	<title>About | Saad Mohammad Rafid Pial</title>
	<meta
		name="description"
		content="About Saad Mohammad Rafid Pial, an MSCS student at UIUC researching AI for systems, site reliability engineering, cloud reliability, and formal methods."
	/>
	<link rel="canonical" href="https://saadmrp1038.github.io/" />
</svelte:head>

<main id="main-content" class="min-h-screen" style="background-color: var(--bg-main);">
	<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:py-20">
		<div class="flex flex-col gap-8 lg:flex-row lg:gap-12">
			<!-- Left Column: Profile Image, Title, and Social Links -->
			<div class="shrink-0 lg:w-1/3">
				<div>
					<div class="mb-6 flex justify-center lg:justify-start">
						<img
							src={profilePic}
							alt="Saad Mohammad Rafid Pial"
							class="glass-panel h-48 w-48 rounded-full border-2 object-cover shadow-sm sm:h-56 sm:w-56"
							style="border-color: var(--border-glass);"
						/>
					</div>
					<div class="text-center lg:text-left">
						<p
							class="mb-6 text-sm leading-relaxed sm:text-base"
							style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);"
						>
							{BIO_TEXT.short}
						</p>
						<div class="flex flex-row justify-center gap-4 lg:flex-col lg:items-start lg:gap-2">
							{#each socialLinks as link (link.href)}
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
			<div class="flex-1 lg:w-2/3">
				<!-- About Me -->
				<div class="mb-8 sm:mb-10">
					<SectionHeading title="About Me" level={1} />
					<div class="prose max-w-none prose-gray dark:prose-invert">
						<p
							class="mb-4 text-sm leading-relaxed sm:text-base"
							style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);"
						>
							{BIO_TEXT.full}
						</p>
						<QuoteBlock
							quote={COURAGE_QUOTE.text}
							author={COURAGE_QUOTE.author}
							imageUrl={courageImage}
						/>
					</div>
				</div>

				<!-- Research Interests -->
				<div class="mb-8 sm:mb-10">
					<SectionHeading title="Research Interests" />

					<div class="flex flex-wrap gap-2">
						{#each RESEARCH_INTERESTS as interest (interest)}
							<ResearchTag label={interest} />
						{/each}
					</div>
					<div class="prose mt-4 max-w-none prose-gray sm:mt-6 dark:prose-invert">
						<p
							class="mb-4 text-sm leading-relaxed sm:text-base"
							style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);"
						>
							{RESEARCH_DESCRIPTION}
						</p>
					</div>
				</div>

				<!-- News and Updates -->
				<div>
					<SectionHeading title="News and Updates" />
					<div class="space-y-3 sm:space-y-4">
						{#each NEWS_ITEMS as news (news.id)}
							<NewsItem date={news.date} segments={news.segments} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
