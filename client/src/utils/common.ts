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
