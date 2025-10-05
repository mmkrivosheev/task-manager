import { LoginForm } from "shared/UI/AuthForms";
import styles from "./LoginPage.module.scss";

export function LoginPage() {
	return (
		<main className={styles.formWrapper}>
			<LoginForm />
		</main>
	);
}
