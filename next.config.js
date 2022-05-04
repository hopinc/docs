const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.js',
	unstable_flexsearch: true,
	unstable_staticImage: true,
});

module.exports = withNextra({
	redirects: async () => [
		{
			source: '/docs',
			destination: '/docs/getting-started',
			statusCode: 301,
		},
	],
});
