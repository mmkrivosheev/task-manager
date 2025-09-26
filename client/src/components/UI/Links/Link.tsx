import { ILinkProps } from "@components/UI/Links/types";
import styles from "./Links.module.scss";

export function Link({ href, children, icon: Icon }: ILinkProps) {
	if (!children && !Icon) return;

	return (
		<a className={styles.link} href={href} target="_blank" rel="noreferrer">
			{Icon && <Icon className={styles.icon} />}
			{children}
		</a>
	);
}
