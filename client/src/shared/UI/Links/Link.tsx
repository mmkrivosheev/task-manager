import { ILinkProps } from "shared/UI/Links/types";
import styles from "./Links.module.scss";

export function Link({ children, icon: Icon, ...props }: ILinkProps) {
	if (!children && !Icon) return;

	return (
		<a className={styles.link} target="_blank" rel="noopener noreferrer" {...props}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</a>
	);
}
