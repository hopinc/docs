import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useLayoutEffect,
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

export function useCurrentLanguage(languages: string[]) {
	const {value, setValue} = useContextLanguage();
	const [localState, setLocalState] = useState(value);

	const first = languages[0];

	useLayoutEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		setValue(window.localStorage.getItem('language') ?? first);
	}, [setValue, first]);

	if (value && languages.includes(value)) {
		return [value, setValue] as const;
	}

	return [
		localState,
		(language: string) => {
			if (languages.includes(language)) {
				setValue(language);
			}

			setLocalState(language);
		},
	] as const;
}

export function CodeProvider({children}: {children: ReactNode}) {
	const [value, setValue] = useState<string | null>(
		typeof window === 'undefined'
			? null
			: window.localStorage.getItem('language'),
	);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const stored = window.localStorage.getItem('language');

		if (stored) {
			setValue(stored);
		}
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined' && value) {
			window.localStorage.setItem('language', value);
		}
	}, [value]);

	return (
		<code.Provider value={useMemo(() => ({value, setValue}), [value])}>
			{children}
		</code.Provider>
	);
}
