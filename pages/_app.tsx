import '../styles/globals.css';

import {CodeProvider} from '../context/code';
import {AppProps} from 'next/app';

export default function Nextra({Component, pageProps}: AppProps) {
	return (
		<CodeProvider>
			<Component {...pageProps} />
		</CodeProvider>
	);
}
