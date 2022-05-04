import urlcat from 'urlcat';

const config = {
	projectLink: 'https://github.com/hopinc/hopinc',
	docsRepositoryBase: 'https://github.com/hopinc/docs/tree/master/pages',
	titleSuffix: ' — Hop API',
	floatTOC: true,
	search: true,
	footer: true,
	unstable_flexsearch: true,
	feedbackLink: () => 'Feedback',
	feedbackLabels: 'feedback',
	footerText: `${new Date().getFullYear()} © Hop, Inc.`,
	footerEditLink: 'Edit this page on GitHub',
	logo: <span>Hop</span>,
	head: function Head({title, meta}) {
		const ogImage =
			meta.image ||
			urlcat('https://ogmeta.vercel.app/', {
				title,
				subtitle: meta.description ?? undefined,
			});

		return (
			<>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#000000"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta httpEquiv="Content-Language" content="en" />
				<meta
					name="description"
					content={meta.description || 'Hop: The realtime engine'}
				/>
				<meta
					name="og:description"
					content={meta.description || 'Hop: The realtime engine'}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@vercel" />
				<meta name="twitter:image" content={ogImage} />
				<meta
					name="og:title"
					content={title ? title + ' — Hop' : 'Hop: The realtime engine'}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Hop: the realtime engine" />
				<meta name="og:title" content="Hop: the realtime engine" />{' '}
				<meta name="og:image" content={ogImage} />
			</>
		);
	},
};

export default config;
