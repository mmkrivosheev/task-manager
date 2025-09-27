import { useTranslation } from "react-i18next";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./HomePage.module.scss";

export function HomePage() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.welcomeWrapper}>
					<h1>{t("Home.welcome")}</h1>
					<p>
						{t("Home.guestInfo")} <i>user</i>
					</p>
				</div>
			</main>
			<Footer />
		</>
	);
}
