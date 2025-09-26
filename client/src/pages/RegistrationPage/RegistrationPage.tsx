import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { RegistrationForm } from "@components/AuthForms";
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
