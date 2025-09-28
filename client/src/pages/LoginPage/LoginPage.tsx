import { Header } from "features/Header";
import { Footer } from "features/Footer";
import { LoginForm } from "features/AuthForms";
import styles from "./LoginPage.module.scss";

export function LoginPage() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.formWrapper}>
					<LoginForm />
				</div>
			</main>
			<Footer />
		</>
	);
}
