import {PropsWithChildren} from 'react';

export function Label({children}: PropsWithChildren<{}>) {
	return (
		<span className="ml-2 p-[6px] rounded-lg bg-red-500/50 text-white font-semibold uppercase text-lg align-middle">
			{children}
		</span>
	);
}
