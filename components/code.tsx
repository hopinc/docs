import {ReactNode} from 'react';

export interface Props {
	children: ReactNode[];
}

export function Code(props: Props) {
	return <div>{props.children.length}</div>;
}
