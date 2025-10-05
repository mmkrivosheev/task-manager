import { RegistrationForm } from "shared/UI/AuthForms";
import styles from "./RegistrationPage.module.scss";

export function RegistrationPage() {
	return (
		<main className={styles.formWrapper}>
			<RegistrationForm />
		</main>
	);
}
