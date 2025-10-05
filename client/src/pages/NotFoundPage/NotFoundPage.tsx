import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
	const { t } = useTranslation();

	return (
		<main className={styles.welcomeWrapper}>
			<h1>{t("NotFoundPage.title")}</h1>
			<p>{t("NotFoundPage.description")}</p>
			<p>{t("NotFoundPage.errorCode")}</p>
		</main>
	);
}
