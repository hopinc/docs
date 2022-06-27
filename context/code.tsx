import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

export const code = createContext<{
	value: string | null;
	setValue: Dispatch<SetStateAction<string | null>>;
} | null>(null);

export function useContextLanguage() {
	const data = useContext(code);

	if (!data) {
		throw new Error('useCurrentLanguage must be used within a CodeProvider');
	}

	return data;
}

export function useCurrentLanguage(snippetSupportedLanguages: string[]) {
	const context = useContextLanguage();

	console.log(context);

	const localLanguage = snippetSupportedLanguages.includes(context.value!)
		? context.value
		: snippetSupportedLanguages[0];

	return [localLanguage, context.setValue] as const;
}

export function CodeProvider({children}: {children: ReactNode}) {
	const [value, setValue] = useState<string | null>(
		typeof window === 'undefined'
			? null
			: window.localStorage.getItem('preferred_language'),
	);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const stored = window.localStorage.getItem('preferred_language');

		if (stored) {
			setValue(stored);
		}
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined' && value) {
			window.localStorage.setItem('preferred_language', value);
		}
	}, [value]);

	return (
		<code.Provider value={useMemo(() => ({value, setValue}), [value])}>
			{children}
		</code.Provider>
	);
}
