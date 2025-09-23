import { useLocation } from "react-router-dom";
import { RouterNavLink } from "@components/UI/Links/RouterNavLink";
import { RouterLink } from "@components/UI/Links/RouterLink";
import HomeIcon from "@assets/icons/home.svg";
import { Logo } from "@components/UI/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
	const { pathname } = useLocation();

	const nav =
		pathname === "/" ? (
			<RouterLink to="/login">Войти</RouterLink>
		) : (
			<>
				<RouterNavLink to="/registration">Регистрация</RouterNavLink>
				<RouterNavLink to="/login">Вход</RouterNavLink>
				<RouterLink to="/" icon={HomeIcon}></RouterLink>
			</>
		);

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Logo to="/">Task-manager</Logo>
					{nav}
				</div>
			</div>
		</header>
	);
};
