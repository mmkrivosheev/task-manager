import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/UI/Input";
import { Button } from "shared/UI/Button";
import { Loader } from "shared/UI/Loader";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { loginUser } from "entities/auth/authThunk";
import { clearToast } from "entities/app/appSlice";
import { validateForm } from "./utils";
import { ILoginFormErrors } from "./types";
import styles from "./AuthForms.module.scss";

export function LoginForm() {
	const [errors, setErrors] = useState<ILoginFormErrors>({});
	const { isLoading } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	useLayoutEffect(() => {
		return () => {
			dispatch(clearToast());
		};
	}, [dispatch]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { errors: errs, payload } = validateForm(e.currentTarget);
		if (errs) {
			setErrors(errs);
			return;
		}
		dispatch(loginUser(payload));
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
				<Button className={styles.button} type="submit" block>
					{t("Login.submit")}
				</Button>
			</form>
			{isLoading && <Loader delay={500} />}
		</>
	);
}
