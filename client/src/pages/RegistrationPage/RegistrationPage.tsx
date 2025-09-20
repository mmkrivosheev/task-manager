import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { RegistrationForm } from "@components/Forms/RegistrationForm";
import styles from "./RegistrationPage.module.scss";

export const RegistrationPage = () => {
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
};
