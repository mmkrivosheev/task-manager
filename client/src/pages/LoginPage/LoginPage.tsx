import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { LoginForm } from "@components/Forms/LoginForm";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
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
};
