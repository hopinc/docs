import '../styles/globals.css';
import 'nextra-theme-docs/style.css';

export default function Nextra({Component, pageProps}) {
	const getLayout = Component.getLayout || (page => page);
	return getLayout(<Component {...pageProps} />);

	// return getLayout(
	// 	<CodeProvider>
	// 		<Component {...pageProps} />
	// 	</CodeProvider>,
	// );
}
