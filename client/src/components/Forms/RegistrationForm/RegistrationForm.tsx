import { Input } from "@components/UI/Input";
import { Button } from "@components/UI/Button";
import styles from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
	return (
		<>
			<h1 className={styles.title}>Регистрация аккаунта</h1>
			<form className={styles.form}>
				<Input label="Адрес эл. почты" type="email" required />
				<Input label="Пароль" type="password" required />
				<Input label="Подтвердить пароль" type="password" required />
				<div className={styles.buttonWrapper}>
					<Button block>Регистрация</Button>
				</div>
			</form>
		</>
	);
};
