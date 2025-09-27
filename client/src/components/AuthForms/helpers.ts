import { isDefined, isEmptyObj, isValidEmail } from "@utils/common";
import { ICredentials, IPayload } from "@components/AuthForms/types";

export function validateForm(form: HTMLFormElement): {
	errors: Partial<ICredentials> | null;
	payload: IPayload;
} {
	const credentials = getFormData(form);
	const errors: Partial<ICredentials> = {};
	const payload = {} as IPayload;

	if (isDefined(credentials.email)) {
		const email = (credentials.email as string).trim();
		payload.email = email;
		if (!email) {
			errors.email = "Validation.emailRequired";
		} else if (!isValidEmail(email)) {
			errors.email = "Validation.emailInvalid";
		}
	}

	if (isDefined(credentials.password)) {
		const MIN_PASS_LENGTH = 6;
		const password = (credentials.password as string).trim();
		payload.password = password;
		if (!password) {
			errors.password = "Validation.passwordRequired";
		} else if (password.length < MIN_PASS_LENGTH) {
			errors.password = {
				key: "Validation.passwordShort",
				values: { length: MIN_PASS_LENGTH },
			};
		}
	}

	if (isDefined(credentials.passwordRepeat)) {
		const passwordRepeat = (credentials.passwordRepeat as string).trim();
		if (!passwordRepeat) {
			errors.passwordRepeat = "Validation.passwordRepeatRequired";
		} else if (payload.password !== passwordRepeat) {
			errors.passwordRepeat = "Validation.passwordMismatch";
		}
	}

	return { errors: isEmptyObj(errors) ? null : errors, payload };
}

function getFormData(form: HTMLFormElement): Record<string, string | string[]> {
	const formData = new FormData(form);
	const data: Record<string, string | string[]> = {};

	for (const [key, value] of formData.entries()) {
		if (data[key]) {
			if (Array.isArray(data[key])) {
				data[key].push(value as string);
			} else {
				data[key] = [data[key], value as string];
			}
		} else {
			data[key] = value as string;
		}
	}

	return data;
}
