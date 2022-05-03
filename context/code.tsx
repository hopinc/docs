import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

export const code = createContext<{
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
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

	if (languages.includes(value)) {
		return {value, setValue};
	}

	return {
		value: languages[0],
		setValue: (language: string) => setValue(language),
	};
}

export function CodeProvider({children}: {children: ReactNode}) {
	const [value, setValue] = useState(
		typeof window === 'undefined'
			? ''
			: window.localStorage.getItem('language') ?? '',
	);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem('language', value);
		}
	}, [value]);

	return (
		<code.Provider value={useMemo(() => ({value, setValue}), [value])}>
			{children}
		</code.Provider>
	);
}
