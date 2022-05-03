import dynamic from 'next/dynamic';
import {ReactNode} from 'react';

export const NoSSR = dynamic(
	async () => {
		function Component(props: {children: ReactNode}) {
			return <>{props.children}</>;
		}

		return Component;
	},
	{ssr: false},
);
