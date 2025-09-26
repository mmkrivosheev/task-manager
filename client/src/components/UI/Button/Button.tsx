import clsx from "clsx";
import { IButtonProps } from "@components/UI/Button/types";
import styles from "./Button.module.scss";

export function Button({
	children,
	icon: Icon,
	block = false,
	variant = "outlined",
	onClick,
	...props
}: IButtonProps) {
	if (!children && !Icon) return;

	return (
		<button
			className={clsx(styles.button, block && styles.block, styles[variant])}
			onClick={onClick}
			{...props}
		>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</button>
	);
}
