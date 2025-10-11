import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { IRouterNavLinkProps } from "shared/UI/Links/types";
import styles from "./Links.module.scss";

export function RouterNavLink({ children, icon: Icon, className, ...props }: IRouterNavLinkProps) {
	if (!children && !Icon) return;

	return (
		<NavLink
			className={({ isActive }) =>
				clsx(styles.link, styles.routerNavLink, isActive && styles.active, className)
			}
			{...props}
		>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</NavLink>
	);
}
