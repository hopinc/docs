// @ts-check

/**
 * @type {import("nextra").withNextra}
 */
// @ts-expect-error
const nextra = require('nextra');

/**
 * @type {import("nextra").NextraConfig}
 */
const config = {
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.js',
	unstable_flexsearch: true,
	unstable_staticImage: true,
};

const withNextra = nextra(config);

module.exports = withNextra({
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
});
