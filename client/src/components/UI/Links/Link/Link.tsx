import { ILinkProps } from "@components/UI/Links/Link/types";
import styles from "./Link.module.scss";

export function Link({ children, href, icon: Icon }: ILinkProps) {
	if (!children && !Icon) return;

	return (
		<a href={href} target="_blank" rel="noreferrer" className={styles.link}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</a>
	);
}
