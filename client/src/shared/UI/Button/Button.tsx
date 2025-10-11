import clsx from "clsx";
import { IButtonProps } from "./types";
import styles from "./Button.module.scss";

export function Button({
	children,
	className,
	icon: Icon,
	block = false,
	variant = "outlined",
	color = "default",
	onClick,
	...props
}: IButtonProps) {
	if (!children && !Icon) return;

	return (
		<button
			className={clsx(
				styles.button,
				block && styles.block,
				styles[variant],
				styles[color],
				children && styles.text,
				className
			)}
			type="button"
			onClick={onClick}
			{...props}
		>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</button>
	);
}
