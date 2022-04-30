import {AppProps} from 'next/app';

import 'nextra-theme-docs/style.css';
import 'tailwindcss/tailwind.css';

type GetLayout = (page: JSX.Element) => JSX.Element;

export default function Nextra({Component, pageProps}: AppProps) {
	const getLayout =
		(Component as {getLayout?: GetLayout}).getLayout ??
		((page: JSX.Element) => page);

	return getLayout(<Component {...pageProps} />);
}
