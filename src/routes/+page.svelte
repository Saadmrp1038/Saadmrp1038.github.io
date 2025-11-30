<script>
	import profilePic from '$lib/assets/profile-2.jpg';
	import courageImage from '$lib/assets/courage.png';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import ResearchTag from '$lib/components/ResearchTag.svelte';
	import NewsItem from '$lib/components/NewsItem.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import QuoteBlock from '$lib/components/QuoteBlock.svelte';
	import { theme } from '$lib/stores/theme.js';
	import { getSocialLinks } from '$lib/data/socialLinks.js';
	import {
		RESEARCH_INTERESTS,
		NEWS_ITEMS,
		BIO_TEXT,
		RESEARCH_DESCRIPTION,
		COURAGE_QUOTE
	} from '$lib/data/pageData.js';

	// Reactive social links that update when theme changes
	$: socialLinks = getSocialLinks($theme);
</script>

<main class="min-h-screen" style="background-color: var(--bg-main);">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 md:py-20">
		<div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
			<!-- Left Column: Profile Image, Title, and Social Links -->
			<div class="lg:w-1/3 shrink-0">
				<div>
					<div class="mb-6 flex justify-center lg:justify-start">
						<img
							src={profilePic}
							alt="Saad Mohammad Rafid Pial"
							class="h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 object-cover shadow-sm glass-panel"
							style="border-color: var(--border-glass);"
						/>
					</div>
					<div class="text-center lg:text-left">
						<p class="mb-6 text-sm sm:text-base leading-relaxed" style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);">
							{BIO_TEXT.short}
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
					<SectionHeading title="About Me" />
					<div class="prose max-w-none prose-gray dark:prose-invert">
						<p class="mb-4 text-sm sm:text-base leading-relaxed" style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);">
							{BIO_TEXT.full}
						</p>
						<QuoteBlock quote={COURAGE_QUOTE.text} author={COURAGE_QUOTE.author} imageUrl={courageImage} />
					</div>
				</div>

				<!-- Research Interests -->
				<div class="mb-8 sm:mb-10">
					<SectionHeading title="Research Interests" />

					<div class="flex flex-wrap gap-2">
						{#each RESEARCH_INTERESTS as interest}
							<ResearchTag label={interest} />
						{/each}
					</div>
					<div class="prose mt-4 sm:mt-6 max-w-none prose-gray dark:prose-invert">
						<p class="mb-4 text-sm sm:text-base leading-relaxed" style="font-family: 'Inter', sans-serif; line-height: 1.7; color: var(--text-primary);">
							{RESEARCH_DESCRIPTION}
						</p>
					</div>
				</div>

				<!-- News and Updates -->
				<div>
					<SectionHeading title="News and Updates" />
					<div class="space-y-3 sm:space-y-4">
						{#each NEWS_ITEMS as news}
							<NewsItem date={news.date} description={news.description} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
