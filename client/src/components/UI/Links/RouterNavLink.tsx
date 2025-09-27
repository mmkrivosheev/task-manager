import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { IRouterLinkProps } from "@components/UI/Links/types";
import styles from "./Links.module.scss";

export function RouterNavLink({ to, children, icon: Icon }: IRouterLinkProps) {
	if (!children && !Icon) return;

	return (
		<NavLink
			className={({ isActive }) => clsx(styles.link, styles.routerNavLink, isActive && styles.active)}
			to={to}
		>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</NavLink>
	);
}
