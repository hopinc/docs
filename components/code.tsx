import {Children, ReactElement, useState} from 'react';
import clsx from 'clsx';
import styles from './code.module.css';

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
		<div
			className={clsx(
				'flex flex-col dark:bg-black rounded-lg space-y-2',
				styles.code__container,
			)}
		>
			<div className="flex max-w-full overflow-x-auto space-x-2">
				{children.map(child => {
					const active = activeLanguage === child.language;

					return (
						<button
							key={child.language}
							className={clsx('px-6 py-1.5 inline-block rounded-md', {
								'bg-neutral-200 dark:bg-neutral-800': active,
								'hover:bg-neutral-100 dark:hover:bg-neutral-900': !active,
							})}
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
