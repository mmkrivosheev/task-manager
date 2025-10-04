import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { normalizePath } from "shared/utils/common";
import { authLinks, guestLinks } from "shared/UI/Navigation/links";
import styles from "./Navigation.module.scss";

const authPaths = ["/login", "/registration"];

export function Navigation() {
	const { pathname } = useLocation();
	const { t } = useTranslation();
	const curLinks = authPaths.includes(normalizePath(pathname)) ? authLinks : guestLinks;

	return (
		<nav>
			<ul className={styles.navList}>
				{curLinks.map(({ to, label, icon, component: Component }) => (
					<li key={to}>
						<Component to={to} icon={icon}>
							{label && t(label)}
						</Component>
					</li>
				))}
			</ul>
		</nav>
	);
}
