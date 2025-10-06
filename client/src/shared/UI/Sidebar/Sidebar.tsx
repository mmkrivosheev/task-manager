import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useLocalStorage } from "shared/hooks/useLocalStorage";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { Button } from "shared/UI/Button";
import ChevronDouble from "assets/icons/chevronDoubleRight.svg";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useLocalStorage("sidebarCollapsed", false);
	const { t } = useTranslation();

	return (
		<aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
			<div className={styles.chevronIcon}>
				<Button
					icon={createSizedIcon(ChevronDouble, 20, 20)}
					variant="link"
					onClick={() => setIsCollapsed(!isCollapsed)}
				/>
			</div>
			<div className={styles.asideContent}>{t("TasksPage.development")}</div>
		</aside>
	);
}
