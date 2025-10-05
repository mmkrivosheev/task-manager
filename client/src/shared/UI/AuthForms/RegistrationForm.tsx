import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/UI/Input";
import { Button } from "shared/UI/Button";
import { validateForm } from "./utils";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { registerUser } from "entities/auth/authThunk";
import { clearError } from "entities/auth/authSlice";
import { IRegistrationFormErrors } from "./types";
import styles from "./AuthForms.module.scss";
import { Loader } from "shared/UI/Loader";

export function RegistrationForm() {
	const [errors, setErrors] = useState<IRegistrationFormErrors>({});
	const { error: authError, isLoading } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	useLayoutEffect(() => {
		return () => {
			dispatch(clearError());
		};
	}, [dispatch]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { errors: errs, payload } = validateForm(e.currentTarget);
		if (errs) {
			setErrors(errs);
			return;
		}
		dispatch(registerUser(payload));
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
					<Button type="submit" block>
						{t("Registration.submit")}
					</Button>
				</div>
				{authError && <p className={styles.errorMessage}>{authError}</p>}
				{isLoading && <Loader delay={500} />}
			</form>
		</>
	);
}
