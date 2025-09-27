import { useTranslation } from "react-i18next";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.welcomeWrapper}>
					<h1>{t("NotFound.title")}</h1>
					<p>{t("NotFound.description")}</p>
					<p>{t("NotFound.errorCode")}</p>
				</div>
			</main>
			<Footer />
		</>
	);
}
