import '../styles/globals.css';

import {CodeProvider} from '../context/code';

export default function Nextra({Component, pageProps}) {
	return (
		<CodeProvider>
			<Component {...pageProps} />
		</CodeProvider>
	);
}
