import '../styles/globals.css';
import 'nextra-theme-docs/style.css';

import {CodeProvider} from '../context/code';

export default function Nextra({Component, pageProps}) {
	const getLayout = Component.getLayout || (page => page);

	return getLayout(
		<CodeProvider>
			<Component {...pageProps} />
		</CodeProvider>,
	);
}
