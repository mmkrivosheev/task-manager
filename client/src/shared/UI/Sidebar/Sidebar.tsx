import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useAppSelector } from "app/store/hooks";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
	const isSidebarOpen = useAppSelector(state => state.app.isSidebarOpen);
	const { t } = useTranslation();

	return (
		<aside className={clsx(styles.sidebar, isSidebarOpen || styles.collapsed)}>
			<div className={styles.content}>{t("TasksPage.development")}</div>
		</aside>
	);
}
