import { Link } from "react-router-dom";
import clsx from "clsx";
import { IRouterLinkProps } from "shared/UI/Links/types";
import styles from "./Links.module.scss";

export function RouterLink({ children, icon: Icon, className, ...props }: IRouterLinkProps) {
	if (!children && !Icon) return;

	return (
		<Link className={clsx(styles.link, styles.routerLink, className)} {...props}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</Link>
	);
}
