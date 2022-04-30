const config = {
	projectLink: 'https://github.com/hopinc/hopinc',
	docsRepositoryBase: 'https://github.com/hopinc/docs/tree/master/pages',
	titleSuffix: ' — Hop API',
	nextLinks: true,
	prevLinks: true,
	floatTOC: true,
	search: true,
	customSearch: null,
	darkMode: true,
	footer: true,
	unstable_flexsearch: true,
	feedbackLink: () => 'Feedback',
	feedbackLabels: 'feedback',
	footerText: `${new Date().getFullYear()} © Hop, Inc.`,
	footerEditLink: 'Edit this page on GitHub',
	logo: <span>Hop</span>,
	unstable_faviconGlyph: '👋',
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Hop: the realtime engine" />
			<meta name="og:title" content="Hop: the realtime engine" />
		</>
	),
};

export default config;
