import { ElementType, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	onClick?: () => void;
	icon?: ElementType;
	block?: boolean;
	variant?: "outlined" | "link";
}

export const Button = ({
	children,
	onClick,
	icon: Icon,
	block = false,
	variant = "outlined",
	...props
}: IButtonProps) => {
	if (!children && !Icon) return;

	return (
		<button
			onClick={onClick}
			className={clsx(styles.button, block && styles.block, styles[variant])}
			{...props}
		>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</button>
	);
};
