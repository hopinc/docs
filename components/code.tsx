import {Children, ReactElement} from 'react';

export interface Props {
	children: ReactElement[];
}

export function Code(props: Props) {
	const children = Children.map(props.children, child => {
		const language = child.props.children.props.children.props['data-language'];

		return <div>{language}</div>;
	});

	return <div>{children}</div>;
}
