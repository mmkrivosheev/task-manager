import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RouterNavLink } from "@components/UI/Links/RouterNavLink";
import { RouterLink } from "@components/UI/Links/RouterLink";
import { Logo } from "@components/UI/Logo";
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
				<RouterLink to="/" icon={HomeIcon}></RouterLink>
			</>
		);

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Logo to="/" />
					{navigation}
				</div>
			</div>
		</header>
	);
}
