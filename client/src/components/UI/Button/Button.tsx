import clsx from "clsx";
import { IButtonProps } from "@components/UI/Button/types";
import styles from "./Button.module.scss";

export function Button({
	children,
	onClick,
	icon: Icon,
	block = false,
	variant = "outlined",
	...props
}: IButtonProps) {
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
}
