import { Logo } from "@components/UI/Logo";
import { Button } from "@components/UI/Button";
import UserIcon from "@assets/icons/user.svg";
import styles from "./Header.module.scss";

export const Header = () => {
	const handleClick = () => {};

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Logo>Task-manager</Logo>
					<Button onClick={handleClick} icon={UserIcon}>
						Войти
					</Button>
				</div>
			</div>
		</header>
	);
};
