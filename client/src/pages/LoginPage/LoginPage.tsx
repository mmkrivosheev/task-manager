import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { LoginForm } from "@components/AuthForms";
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
