import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {SkipNavLink} from '@reach/skip-nav';

export default class HopDocs extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />

					<link
						href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
						rel="stylesheet"
					/>

					<link
						rel="stylesheet"
						href="https://hop.io/fonts/gt-walsheim/stylesheet.css"
					/>
				</Head>

				<body>
					<SkipNavLink />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
