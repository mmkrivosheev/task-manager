import { isDefined, isValidEmail } from "@utils/common";
import { ICredentials, IPayload } from "@components/AuthForms/types";

export function validateForm(formData: FormData): { errors: Partial<ICredentials>; payload: IPayload } {
	const credentials = Object.fromEntries(formData) as unknown as ICredentials;
	console.log(credentials);
	const errors: Partial<ICredentials> = {};
	const payload = {} as IPayload;

	if (isDefined(credentials.email)) {
		const email = credentials.email.trim();
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
		const passwordRepeat = credentials.passwordRepeat.trim();
		if (!passwordRepeat) {
			errors.passwordRepeat = "Validation.passwordRepeatRequired";
		} else if (payload.password !== passwordRepeat) {
			errors.passwordRepeat = "Validation.passwordMismatch";
		}
	}

	return { errors, payload };
}
