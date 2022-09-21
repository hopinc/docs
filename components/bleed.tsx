// This file exists because nextra-theme-docs Bleed component is buggy

import {PropsWithChildren} from 'react';

export function Bleed({children}: PropsWithChildren) {
	return <div className="-mx-6 flex justify-center">{children}</div>;
}
