import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RouterLink } from "shared/UI/Links";
import { Button } from "shared/UI/Button";
import { authLinks, guestLinks } from "./links";
import { normalizePath } from "shared/utils/common";
import { useAppDispatch, useAppSelector } from "shared/hooks/redux";
import { logoutUser } from "entities/User/authThunk";
import logo from "assets/img/logo.png";
import { INavItem } from "./types";
import styles from "./Header.module.scss";

export function Header() {
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const { t } = useTranslation();

	const getNavLinks = (links: INavItem[]) => {
		return links.map(({ to, end, label, icon, component: Component }) => (
			<Component key={to} to={to} icon={icon} end={end}>
				{label && t(label)}
			</Component>
		));
	};

	const getCurrentNavLinks = () => {
		const normalizedPath = normalizePath(pathname);
		return normalizedPath === "/login" || normalizedPath === "/registration"
			? getNavLinks(authLinks)
			: getNavLinks(guestLinks);
	};

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.logo}>
						<RouterLink to="/">
							<img className={styles.logo} src={logo} alt="logo" />
						</RouterLink>
					</div>
					{user ? (
						<Button variant="link" type="button" onClick={handleLogout}>
							{t("Navigation.logout")}
						</Button>
					) : (
						<nav>
							<ul className={styles.navList}>
								{getCurrentNavLinks().map((navLink, index) => (
									<li key={index}>{navLink}</li>
								))}
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
}
