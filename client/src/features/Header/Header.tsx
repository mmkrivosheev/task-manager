import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RouterLink } from "shared/UI/Links";
import { authLinks, guestLinks } from "../Header/links";
import { normalizePath } from "shared/utils/common";
import logo from "assets/img/logo.png";
import { INavItem } from "../Header/types";
import styles from "./Header.module.scss";

export function Header() {
	const { pathname } = useLocation();
	const { t } = useTranslation();

	const getNavLinks = (links: INavItem[]) => {
		return links.map(({ to, end, label, icon, component: Component }) => (
			<Component key={to} to={to} icon={icon} end={end}>
				{label && t(label)}
			</Component>
		));
	};

	const normalizedPath = normalizePath(pathname);
	const navLinks =
		normalizedPath === "/login" || normalizedPath === "/registration"
			? getNavLinks(authLinks)
			: getNavLinks(guestLinks);

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.logo}>
						<RouterLink to="/">
							<img className={styles.logo} src={logo} alt="logo" />
						</RouterLink>
					</div>
					<nav>
						<ul className={styles.navList}>
							{navLinks.map((navLink, index) => (
								<li key={index}>{navLink}</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
