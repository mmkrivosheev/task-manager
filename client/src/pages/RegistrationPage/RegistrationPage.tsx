import { Header } from "features/Header";
import { Footer } from "features/Footer";
import { RegistrationForm } from "features/AuthForms";
import styles from "./RegistrationPage.module.scss";

export function RegistrationPage() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.formWrapper}>
					<RegistrationForm />
				</div>
			</main>
			<Footer />
		</>
	);
}
