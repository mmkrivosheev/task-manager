import { useTranslation } from "react-i18next";
import { RouterLink } from "shared/UI/Links";
import { setSearchQuery } from "entities/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { openModal } from "entities/app/appSlice";
import { Button } from "shared/UI/Button";
import { Navigation } from "shared/UI/Navigation";
import { SearchBar } from "shared/UI/SearchBar";
import { logoutUser } from "entities/auth/authThunk";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import PencilIcon from "assets/icons/pencil.svg";
import logo from "assets/img/logo.png";
import styles from "./Header.module.scss";

export function Header() {
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const handleIconClick = () => {
		dispatch(openModal({ type: "createCard", title: t("TasksPage.card") }));
	};

	const btnGroup = (
		<div className={styles.btnGroup}>
			<Button variant="link" icon={createSizedIcon(PencilIcon, 20, 20)} onClick={handleIconClick} />
			<Button variant="link" onClick={() => dispatch(logoutUser())}>
				{t("Navigation.logout")}
			</Button>
		</div>
	);

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<RouterLink className={styles.logo} to="/">
						<img className={styles.logo} src={logo} alt="logo" />
					</RouterLink>
					{user && (
						<SearchBar
							className={styles.searchBar}
							placeholder={t("TasksPage.search")}
							onSearch={value => dispatch(setSearchQuery(value))}
						/>
					)}
					{user ? btnGroup : <Navigation />}
				</div>
			</div>
		</header>
	);
}
