import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.welcomeWrapper}>
					<h1>Страница не найдена</h1>
					<p>Неправильно набран адрес или у вас нет доступа к этой странице</p>
					<p>Ошибка 404</p>
				</div>
			</main>
			<Footer />
		</>
	);
};
