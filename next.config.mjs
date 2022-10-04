// @ts-check

import nextra from 'nextra';

/**
 * @type {import("nextra").NextraConfig}
 */
const config = {
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
	unstable_flexsearch: {
		codeblocks: true,
	},
	unstable_staticImage: true,
	unstable_readingTime: true,
	unstable_defaultShowCopyCode: true,
};

const withNextra = nextra(config);

export default withNextra({
	redirects: async () => [
		{
			source: '/docs',
			destination: '/',
			statusCode: 301,
		},
	],

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},

	reactStrictMode: true,

	experimental: {
		newNextLinkBehavior: true,
		images: {
			allowFutureImage: true,
		},
	},
});
