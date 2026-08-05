/**
 * Page-specific data constants
 * Centralized location for homepage content
 */

export const RESEARCH_INTERESTS = ['AIOps', 'Cloud Reliability'];

export const NEWS_ITEMS = [
	{
		id: 'nuevai-chitaly-2025',
		date: 'Jul 2025',
		segments: [
			{ text: 'My paper ' },
			{ text: 'NuevAI', emphasis: true },
			{ text: ' got accepted at ' },
			{ text: 'CHItaly 2025', emphasis: true }
		]
	},
	{
		id: 'uiuc-research-internship-2025',
		date: 'May 2025',
		segments: [{ text: "Began research internship at Professor Tianyin Xu's lab at UIUC" }]
	},
	{
		id: 'sregym-cais-2026',
		date: 'Apr 2025',
		segments: [
			{ text: 'Our demo paper ' },
			{
				text: 'SREGym: A Live Training Ground for AI SRE Agents with High-Fidelity Failure Drills',
				emphasis: true
			},
			{ text: ' got accepted at ' },
			{ text: "ACM CAIS '26", emphasis: true },
			{ text: ' as a System Demonstration' }
		]
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
			{ text: 'SREGym', emphasis: true }
		]
	},
	{
		id: 'buet-graduation-2025',
		date: 'Mar 2025',
		segments: [{ text: 'Graduated with a BSc in Computer Science and Engineering from BUET' }]
	}
];

export const BIO_TEXT = {
	short: 'Software Engineer@Monsha.AI · Research Intern@UIUC · Incoming MSCS@UIUC',
	full: "Hi, I am Pial. I graduated with a Bachelor of Science in Computer Science and Engineering from the Bangladesh University of Engineering and Technology (BUET). Currently, I am a remote research intern at Professor Tianyin Xu's lab at the University of Illinois Urbana-Champaign, working on SREGym, a live benchmark for evaluating AI agents on high-fidelity cloud system failures. Alongside my research, I work as a full-time Software Engineer at Monsha.AI, building AI-powered tools to help educators create classroom materials."
};

export const RESEARCH_DESCRIPTION =
	'My research is in the AIOps space, specifically in AI for Site Reliability Engineering (SRE). I am currently building SREGym, a live benchmark to evaluate whether AI agents can diagnose and resolve production incidents on real cloud-native stacks. SREGym simulates high-fidelity failure scenarios including metastable failures, correlated faults, and noisy monitoring environments.';

export const COURAGE_QUOTE = {
	text: "You're beautiful as you are, Courage. With all your imperfections, you can do anything.",
	author: 'Courage the Cowardly Dog'
};
