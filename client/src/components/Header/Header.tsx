import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RouterLink, RouterNavLink } from "@components/UI/Links";
import { SizedSVGIcon } from "@HOC/SizedSVGIcon";
import logo from "@assets/icons/logo.png";
import HomeIcon from "@assets/icons/home.svg";
import styles from "./Header.module.scss";

export function Header() {
	const { pathname } = useLocation();
	const { t } = useTranslation();

	const navigation =
		pathname === "/" ? (
			<RouterLink to="/login">{t("Navigation.login")}</RouterLink>
		) : (
			<>
				<RouterNavLink to="/registration">{t("Navigation.register")}</RouterNavLink>
				<RouterNavLink to="/login">{t("Navigation.login")}</RouterNavLink>
				<RouterLink to="/" icon={SizedSVGIcon(HomeIcon, 14, 14)}></RouterLink>
			</>
		);

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.logo}>
						<RouterLink to="/">
							<img className={styles.logo} src={logo} alt="logo" />
						</RouterLink>
					</div>
					<nav className={styles.navigation}>{navigation}</nav>
				</div>
			</div>
		</header>
	);
}
