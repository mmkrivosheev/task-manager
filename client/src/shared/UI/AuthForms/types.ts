export interface ILoginFormErrors {
	email?: string;
	password?: string | { key: string; values?: Record<string, unknown> };
}

export interface IRegistrationFormErrors extends ILoginFormErrors {
	passwordRepeat?: string;
}

export interface IPayload {
	email: string;
	password: string;
}
