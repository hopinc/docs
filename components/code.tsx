import {Children, ReactElement} from 'react';
import clsx from 'clsx';
import styles from './code.module.css';
import {useCurrentLanguage} from '../context/code';

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

	const [activeLanguage, setActiveLanguage] = useCurrentLanguage(
		children.map(child => child.language),
	);

	return (
		<div
			className={clsx(
				'flex flex-col my-5 dark:bg-black rounded-lg space-y-2 p-3 border border-neutral-100 dark:border-neutral-900',
				styles.code__container,
			)}
		>
			<div className="flex max-w-full overflow-x-auto divide-x divide-neutral-100 dark:divide-neutral-800">
				{children.map(child => {
					const active = activeLanguage === child.language;

					return (
						<div
							key={child.language}
							className="px-3 first-of-type:pl-0 last-of-type:pr-0"
						>
							<button
								className={clsx(
									'transition-colors px-6 py-1 text-xs uppercase tracking-widest inline-block rounded-md',
									{
										'bg-primary-500 text-primary-50 dark:bg-neutral-800':
											active,
										'hover:bg-neutral-100 dark:hover:bg-neutral-900': !active,
									},
								)}
								onClick={() => setActiveLanguage(child.language)}
							>
								{child.language}
							</button>
						</div>
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
