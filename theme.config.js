// @ts-check

import urlcat from 'urlcat';

/**
 * @type {import("./theme").DocsThemeConfig}
 */
const config = {
	projectLink: 'https://github.com/hopinc/docs',
	docsRepositoryBase: 'https://github.com/hopinc/docs/tree/master/pages',
	projectChatLink: 'https://hop.io/discord',
	titleSuffix: ' — Hop API',
	search: true,
	floatTOC: true,
	footer: true,
	unstable_flexsearch: true,
	feedbackLabels: 'feedback',
	feedbackLink: 'Feedback',
	footerText: function FooterText() {
		return <>{new Date().getFullYear()} © Hop, Inc.</>;
	},
	footerEditLink: function FooterEditLink() {
		return <>Edit this page</>;
	},
	logo: function Logo() {
		return <span>Hop</span>;
	},
	banner: function Banner() {
		return (
			<a
				href="https://hop.io/beta"
				target="_blank"
				rel="noopener noreferrer"
				className="font-medium text-current no-underline"
				title="Go to the Hop beta announcement"
			>
				Hop.io is now in public beta
			</a>
		);
	},
	head: function Head({title, meta}) {
		const ogImage =
			meta.image ||
			urlcat('https://ogmeta.vercel.app/', {
				title,
				subtitle: meta.description ?? undefined,
				dark: 'true',
			});

		return (
			<>
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
				<meta name="twitter:site" content="@hop" />
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
