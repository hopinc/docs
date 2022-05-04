import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {SkipNavLink} from '@reach/skip-nav';

export default class HopDocs extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />

				<body>
					<SkipNavLink />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
