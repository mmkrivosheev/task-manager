import { ElementType, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./RouterNavLink.module.scss";
import clsx from "clsx";

interface IRouterNavLinkProps {
	to: string;
	children?: ReactNode;
	icon?: ElementType;
}

export const RouterNavLink = ({ children, to, icon: Icon }: IRouterNavLinkProps) => {
	if (!children && !Icon) return;

	return (
		<NavLink to={to} className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</NavLink>
	);
};
