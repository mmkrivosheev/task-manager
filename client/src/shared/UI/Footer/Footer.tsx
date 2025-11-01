import { Settings } from "shared/UI/Settings";
import { Button } from "shared/UI/Button";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { toggleAndPersistSidebar } from "entities/app/appThunk";
import SidebarIcon from "assets/icons/sidebar.svg";
import styles from "./Footer.module.scss";

export function Footer() {
	const user = useAppSelector(state => state.auth.user);
	const dispatch = useAppDispatch();

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{user && (
						<Button
							className={styles.sidebarToggle}
							icon={createSizedIcon(SidebarIcon, 24, 24)}
							variant="link"
							onClick={() => dispatch(toggleAndPersistSidebar())}
						/>
					)}
					<Settings />
				</div>
			</div>
		</footer>
	);
}
