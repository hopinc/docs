// @ts-check

import urlcat from 'urlcat';
import React from 'react';
import {HopLogo} from './assets/BrandVectors';

/**
 * @type {import("./theme").DocsThemeConfig}
 */
const config = {
	projectLink: 'https://github.com/hopinc/docs',
	docsRepositoryBase: 'https://github.com/hopinc/docs/tree/master/pages',
	projectChatLink: 'https://discord.gg/hop',
	titleSuffix: ' — Hop Documentation',
	search: true,
	floatTOC: true,
	footer: true,
	defaultMenuCollapsed: true,
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
		return <HopLogo width={50} />;
		// return <Image width={100} height={50} alt="Hop Logo" src="/hop.svg" />;
	},

	font: false,

	banner: function Banner() {
		return (
			<a
				href="https://hop.io"
				target="_blank"
				rel="noopener noreferrer"
				className="font-medium text-current no-underline"
				title="Go to the Hop beta announcement"
			>
				Hop is in private beta
			</a>
		);
	},
	nextThemes: {},
	head: function Head({title, meta, ...props}) {
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
				<style
					dangerouslySetInnerHTML={{
						__html: `img[decoding] {
						border-radius: 0.75rem;
					}

					html {
						font-family: "GT Walsheim", san-serif !important;
					}

					code, kbd, pre, samp {
						font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace !important;
					}

					:root {
						--nextra-primary-hue: 258deg !important;
					}

					.dark {
						--nextra-primary-hue: 204deg !important;
					}

					.dark li.active > a {
						--tw-text-opacity: 1 !important;
						--tw-bg-opacity: 0.2 !important;
					}

					.nextra-sidebar li a {
						border-radius: 2em !important;
						padding-left: 12px !important;
					}

					.nextra-sidebar li > a > span > svg {
						border-radius: 100%;
					}

					.dark .nextra-body a {
						--nextra-primary-hue: 204deg !important;
					}
					`,
					}}
				/>
			</>
		);
	},
};

export default config;
