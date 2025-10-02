import { useState, useEffect } from "react";

export function useLocalStorage(key: string, initialValue: string) {
	const [value, setValue] = useState<string>(() => {
		try {
			return localStorage.getItem(key) || initialValue;
		} catch (error) {
			console.error("Error reading from localStorage:", error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(key, value);
		} catch (error) {
			console.error("Error writing to localStorage:", error);
		}
	}, [key, value]);

	return [value, setValue] as const;
}
