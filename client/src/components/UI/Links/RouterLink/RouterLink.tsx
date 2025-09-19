import { ElementType, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./RouterLink.module.scss";

interface IRouterLinkProps {
	to: string;
	children?: ReactNode;
	icon?: ElementType;
}

export const RouterLink = ({ children, to, icon: Icon }: IRouterLinkProps) => {
	if (!children && !Icon) return;

	return (
		<Link to={to} className={styles.link}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</Link>
	);
};
