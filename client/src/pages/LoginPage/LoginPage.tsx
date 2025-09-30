import { LoginForm } from "shared/UI/AuthForms";
import styles from "./LoginPage.module.scss";

export function LoginPage() {
	return (
		<>
			<div className={styles.formWrapper}>
				<LoginForm />
			</div>
		</>
	);
}
