import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
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

export function CodeProvider({children}) {
	const [value, setValue] = useState('');

	return (
		<code.Provider value={useMemo(() => ({value, setValue}), [value])}>
			{children}
		</code.Provider>
	);
}
