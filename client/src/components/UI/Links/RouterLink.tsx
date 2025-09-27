import { Link } from "react-router-dom";
import { IRouterLinkProps } from "@components/UI/Links/types";
import styles from "./Links.module.scss";
import clsx from "clsx";

export function RouterLink({ to, children, icon: Icon }: IRouterLinkProps) {
	if (!children && !Icon) return;

	return (
		<Link className={clsx(styles.link, styles.routerLink)} to={to}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</Link>
	);
}
