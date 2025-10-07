export function isDefined<T>(some: T | null | undefined): some is T {
	return some !== null && some !== undefined;
}

export function isEmptyObj(obj: object): boolean {
	return Object.keys(obj).length === 0;
}

export function isValidEmail(email: string): boolean {
	const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regExp.test(email);
}

export function normalizePath(path: string): string {
	return path.replace(/\/$/, "");
}

export function getDiff<T extends Record<string, string | number | undefined>>(
	updated: T,
	original: T
): Partial<T> {
	return (Object.entries(updated) as [keyof T, T[keyof T]][]).reduce((acc, [key, value]) => {
		if (isDefined(value) && value !== original[key]) {
			acc[key] = value;
		}
		return acc;
	}, {} as Partial<T>);
}
