import {Children, ReactElement, useState} from 'react';

export interface Props {
	children: ReactElement[];
}

export function Code(props: Props) {
	const children = Children.map(props.children, child => {
		const language = child.props.children.props.children.props[
			'data-language'
		] as string;

		return {
			language,
			Component: child,
		};
	});

	const [activeLanguage, setActiveLanguage] = useState<string>(
		children[0].language,
	);

	return (
		<div className="flex flex-col dark:bg-black rounded-lg p-2">
			<div className="flex max-w-full overflow-x-auto space-x-2">
				{children.map(child => {
					const active = activeLanguage === child.language;

					return (
						<button
							key={child.language}
							className="px-2 inline-block"
							onClick={() => setActiveLanguage(child.language)}
						>
							{child.language}
						</button>
					);
				})}
			</div>

			<div>
				{children.map(child => {
					const active = activeLanguage === child.language;

					return (
						<div key={child.language} className={active ? 'block' : 'hidden'}>
							{child.Component}
						</div>
					);
				})}
			</div>
		</div>
	);
}
