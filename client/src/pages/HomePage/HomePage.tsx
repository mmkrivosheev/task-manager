import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.welcomeWrapper}>
					<h1>Приветствую!</h1>
					<p>
						Для входа без регистрации используйте логин и пароль <i>user</i>
					</p>
				</div>
			</main>
			<Footer />
		</>
	);
};
