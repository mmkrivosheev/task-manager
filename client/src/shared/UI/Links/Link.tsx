import clsx from "clsx";
import { ILinkProps } from "shared/UI/Links/types";
import styles from "./Links.module.scss";

export function Link({ children, icon: Icon, className, ...props }: ILinkProps) {
	if (!children && !Icon) return;

	return (
		<a className={clsx(styles.link, className)} {...props}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</a>
	);
}
