import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input } from "shared/UI/Input";
import { Button } from "shared/UI/Button";
import { validateForm } from "./utils";
import { useAppDispatch, useAppSelector } from "shared/hooks/redux";
import { registerUser } from "entities/User/authThunk";
import { IRegistrationFormErrors } from "./types";
import styles from "./AuthForms.module.scss";

export function RegistrationForm() {
	const [errors, setErrors] = useState<IRegistrationFormErrors>({});
	const { error: authError } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { errors: errs, payload } = validateForm(e.currentTarget);
		if (errs) {
			setErrors(errs);
			return;
		}
		dispatch(registerUser(payload)).then(result => result && navigate("/tasks"));
	};

	return (
		<>
			<h1 className={styles.title}>{t("Registration.title")}</h1>
			<form className={styles.form} onSubmit={handleSubmit} noValidate>
				<Input
					label={t("Registration.email")}
					type="email"
					name="email"
					error={t(errors.email || "")}
					required
				/>
				<Input
					label={t("Registration.password")}
					type="password"
					name="password"
					error={
						typeof errors.password === "object"
							? t(errors.password.key, errors.password.values)
							: t(errors.password || "")
					}
					required
				/>
				<Input
					label={t("Registration.passwordRepeat")}
					type="password"
					name="passwordRepeat"
					error={t(errors.passwordRepeat || "")}
					required
				/>
				<div className={styles.buttonWrapper}>
					<Button block>{t("Registration.submit")}</Button>
				</div>
				{authError && <p className={styles.errorMessage}>{authError}</p>}
			</form>
		</>
	);
}
