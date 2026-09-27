/**
 * Page-specific data constants
 * Centralized location for homepage content
 */

export const RESEARCH_INTERESTS = [
	'AI for Systems',
	'Site Reliability Engineering',
	'Cloud Reliability',
	'Formal Methods'
];

export const NEWS_ITEMS = [
	{
		id: 'sregym-neurips-2026',
		date: 'Sep 2026',
		segments: [
			{ text: 'Our paper ' },
			{
				text: 'SREGym: A Live Benchmark for AI SRE Agents with High-Fidelity Failure Scenarios',
				href: 'https://arxiv.org/abs/2605.07161',
				kind: 'publication'
			},
			{ text: ' was accepted to the NeurIPS 2026 Evaluations and Datasets Track' }
		]
	},
	{
		id: 'uiuc-mscs-2026',
		date: 'Aug 2026',
		segments: [{ text: 'Started my MS in Computer Science at UIUC' }]
	},
	{
		id: 'edupresenta-hcii-2026',
		date: 'Jul 2026',
		segments: [
			{ text: 'Our paper ' },
			{
				text: 'EduPresenta',
				href: 'https://doi.org/10.1007/978-3-032-30784-2_19',
				kind: 'publication'
			},
			{ text: ' was published at HCII 2026' }
		]
	},
	{
		id: 'sregym-cais-2026',
		date: 'May 2026',
		segments: [
			{ text: 'Our paper ' },
			{
				text: 'SREGym: A Live Training Ground for AI SRE Agents with High-Fidelity Failure Drills',
				href: 'https://doi.org/10.1145/3786335.3813208',
				kind: 'publication'
			},
			{ text: ' was published as a system demonstration at ACM CAIS 2026' }
		]
	},
	{
		id: 'nuevai-chitaly-2025',
		date: 'Jul 2025',
		segments: [
			{ text: 'Our paper ' },
			{
				text: 'NuevAI',
				href: 'https://doi.org/10.1145/3750069.3750094',
				kind: 'publication'
			},
			{ text: ' was published at CHItaly 2025' }
		]
	},
	{
		id: 'uiuc-research-internship-2025',
		date: 'May 2025',
		segments: [{ text: "Began research internship at Professor Tianyin Xu's lab at UIUC" }]
	},
	{
		id: 'sregym-illinois-cs-news-2025',
		date: 'Apr 2025',
		segments: [
			{ text: 'We got ' },
			{
				text: 'featured on Illinois CS News',
				href: 'https://siebelschool.illinois.edu/news/sregym'
			},
			{ text: ' for ' },
			{ text: 'SREGym', kind: 'project' }
		]
	},
	{
		id: 'buet-graduation-2025',
		date: 'Mar 2025',
		segments: [{ text: 'Graduated with a BSc in Computer Science and Engineering from BUET' }]
	}
];

export const BIO_TEXT = {
	short: 'MSCS Student@UIUC · Research Assistant@UIUC · AI for Systems',
	full: "Hi, I am Pial. I am an MSCS student and research assistant at the University of Illinois Urbana-Champaign, where I work in Professor Tianyin Xu's lab. My research spans AI for systems, site reliability engineering, and formal methods, including SREGym and Specula. Previously, I worked as a Software Engineer at Monsha.AI, building AI-powered tools for educators. I earned my BSc in Computer Science and Engineering from the Bangladesh University of Engineering and Technology (BUET)."
};

export const RESEARCH_DESCRIPTION = [
	{
		text: 'My research focuses on AI agents that can reason about, verify, diagnose, and repair complex software systems. I contribute to '
	},
	{
		text: 'SREGym',
		href: 'https://github.com/SREGym/SREGym'
	},
	{
		text: ', a live benchmark for evaluating AI agents on realistic cloud incidents, and '
	},
	{
		text: 'Specula',
		href: 'https://github.com/specula-org/Specula'
	},
	{
		text: ', an autonomous system for generating formal specifications and model-checking system code.'
	}
];

export const COURAGE_QUOTE = {
	text: "You're beautiful as you are, Courage. With all your imperfections, you can do anything.",
	author: 'Courage the Cowardly Dog'
};
