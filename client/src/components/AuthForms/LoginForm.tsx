import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios, { AxiosError } from "axios";
import { Input } from "@components/UI/Input";
import { Button } from "@components/UI/Button";
import { validateForm } from "@components/AuthForms/helpers";
import { isEmptyObj } from "@utils/common";
import { ILoginFormErrors } from "@components/AuthForms/types";
import styles from "./AuthForms.module.scss";

export function LoginForm() {
	const { t } = useTranslation();
	const [errors, setErrors] = useState<ILoginFormErrors>({});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { errors, payload } = validateForm(new FormData(e.currentTarget));
		setErrors(errors);
		if (!isEmptyObj(errors)) return;

		try {
			const res = await axios.post("/api/auth/login", payload);
			setErrors({ form: "Вы залогинились" });
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			setErrors({ form: error.response?.data.error || "Login.error" });
		}
	};

	return (
		<>
			<h1 className={styles.title}>{t("Login.title")}</h1>
			<form className={styles.form} onSubmit={handleSubmit} noValidate>
				<Input
					label={t("Login.email")}
					type="email"
					name="email"
					error={t(errors.email || "")}
					required
				/>
				<Input
					label={t("Login.password")}
					type="password"
					name="password"
					error={
						typeof errors.password === "object"
							? t(errors.password.key, errors.password.values)
							: t(errors.password || "")
					}
					required
				/>
				<div className={styles.buttonWrapper}>
					<Button block>{t("Login.submit")}</Button>
				</div>
				{errors.form && <p className={styles.errorMessage}>{t(errors.form)}</p>}
			</form>
		</>
	);
}
