import { Input } from "@components/UI/Input";
import { Button } from "@components/UI/Button";
import styles from "./LoginForm.module.scss";
import axios from "axios";

export const LoginForm = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(111);
		const form = e.currentTarget;
		const formData = {
			email: form.email.value || "test@example.com",
			password: form.password.value || "123456",
		};
		if (!formData.email || !formData.password) return;
		const res = await axios.post("http://localhost:4000/auth/login", formData);
		console.log(res);
	};

	return (
		<>
			<h1 className={styles.title}>Вход в аккаунт</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input label="Адрес эл. почты" type="email" name="email" required />
				<Input label="Пароль" type="password" name="password" required />
				<div className={styles.buttonWrapper}>
					<Button block>Вход</Button>
				</div>
			</form>
		</>
	);
};
