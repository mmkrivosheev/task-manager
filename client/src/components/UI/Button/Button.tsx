import { ElementType, ReactNode } from "react";

import styles from "./Button.module.scss";

interface IButtonProps {
	children: ReactNode;
	onClick: () => void;
	icon?: ElementType;
}

export const Button = ({ children, onClick, icon: Icon }: IButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</button>
	);
};
