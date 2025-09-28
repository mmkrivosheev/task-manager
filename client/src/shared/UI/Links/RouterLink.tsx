import { Link } from "react-router-dom";
import { IRouterLinkProps } from "shared/UI/Links/types";
import styles from "./Links.module.scss";
import clsx from "clsx";

export function RouterLink({ children, icon: Icon, ...props }: IRouterLinkProps) {
	if (!children && !Icon) return;

	return (
		<Link className={clsx(styles.link, styles.routerLink)} {...props}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</Link>
	);
}
