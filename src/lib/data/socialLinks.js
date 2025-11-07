/**
 * Social links configuration
 * This file contains the social media links and their associated icons
 */

import { EMAIL_ICON, GITHUB_ICON_DARK, GITHUB_ICON_LIGHT, LINKEDIN_ICON, GOOGLE_SCHOLAR_ICON } from '../constants/icons.js';

/**
 * Get social links array based on current theme
 * @param {string} theme - Current theme ('dark' or 'light')
 * @returns {Array} Array of social link objects
 */
export function getSocialLinks(theme) {
	return [
		{
			href: 'mailto:saadmrp@gmail.com',
			label: 'Email',
			icon: EMAIL_ICON,
			external: false
		},
		{
			href: 'https://github.com/Saadmrp1038',
			label: 'GitHub',
			icon: theme === 'dark' ? GITHUB_ICON_LIGHT : GITHUB_ICON_DARK
		},
		{
			href: 'https://linkedin.com/in/saadmrp',
			label: 'LinkedIn',
			icon: LINKEDIN_ICON
		},
		{
			href: 'https://scholar.google.com/citations?user=SOodx3QAAAAJ&hl=en',
			label: 'Google Scholar',
			icon: GOOGLE_SCHOLAR_ICON
		}
	];
}

