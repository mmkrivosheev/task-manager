import { useTranslation } from "react-i18next";
import { RouterLink } from "shared/UI/Links";
import { Button } from "shared/UI/Button";
import { Navigation } from "shared/UI/Navigation";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { logoutUser } from "entities/auth/authThunk";
import { openTaskModal } from "entities/app/appSlice";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import PencilIcon from "assets/icons/pencil.svg";
import logo from "assets/img/logo.png";
import styles from "./Header.module.scss";

export function Header() {
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const btnGroup = (
		<div className={styles.btnGroup}>
			<Button
				variant="link"
				icon={createSizedIcon(PencilIcon, 20, 20)}
				onClick={() => dispatch(openTaskModal())}
			/>
			<Button variant="link" onClick={() => dispatch(logoutUser())}>
				{t("Navigation.logout")}
			</Button>
		</div>
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
					{user ? btnGroup : <Navigation />}
				</div>
			</div>
		</header>
	);
}
