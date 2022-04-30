import {Children, ReactElement, useState} from 'react';

export interface Props {
	children: ReactElement[];
}

export function Code(props: Props) {
	const children = Children.map(props.children, child => {
		const language = child.props.children.props.children.props['data-language'];

		return {
			language,
			Component: child,
		};
	});

	const [activeLanguage, setActiveLanguage] = useState<string>(
		children[0].language,
	);

	return (
		<div>
			<div className="code-language-selector">
				{children.map(child => (
					<button
						key={child.language}
						className={activeLanguage === child.language ? 'active' : ''}
						onClick={() => setActiveLanguage(child.language)}
					>
						{child.language}
					</button>
				))}
			</div>

			{children.find(child => child.language === activeLanguage).Component}
		</div>
	);
}
