import { useState, useEffect } from "react";

export function useLocalStorage(key: string, initialValue: string | boolean) {
	const [value, setValue] = useState<string | boolean>(() => {
		try {
			const stored = localStorage.getItem(key);
			if (stored === null) return initialValue;
			if (typeof initialValue === "boolean") {
				return stored === "true";
			}
			return stored;
		} catch (error) {
			console.error("Error reading from localStorage:", error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			if (typeof value === "boolean") {
				localStorage.setItem(key, value ? "true" : "false");
			} else {
				localStorage.setItem(key, value);
			}
		} catch (error) {
			console.error("Error writing to localStorage:", error);
		}
	}, [key, value]);

	return [value, setValue] as const;
}
