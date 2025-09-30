import { useTranslation } from "react-i18next";
import styles from "./GuestPage.module.scss";

export function GuestPage() {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles.welcomeWrapper}>
				<h1>{t("Home.welcome")}</h1>
				<p>
					{t("Home.guestInfo")} <i>user</i>
				</p>
			</div>
		</>
	);
}
