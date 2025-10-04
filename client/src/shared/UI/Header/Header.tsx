import { useTranslation } from "react-i18next";
import { RouterLink } from "shared/UI/Links";
import { Button } from "shared/UI/Button";
import { Navigation } from "shared/UI/Navigation";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { logoutUser } from "entities/auth/authThunk";
import logo from "assets/img/logo.png";
import styles from "./Header.module.scss";

export function Header() {
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const logoutBtn = (
		<Button variant="link" onClick={() => dispatch(logoutUser())}>
			{t("Navigation.logout")}
		</Button>
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
					{user ? logoutBtn : <Navigation />}
				</div>
			</div>
		</header>
	);
}
