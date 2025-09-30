import { RegistrationForm } from "shared/UI/AuthForms";
import styles from "./RegistrationPage.module.scss";

export function RegistrationPage() {
	return (
		<>
			<div className={styles.formWrapper}>
				<RegistrationForm />
			</div>
		</>
	);
}
