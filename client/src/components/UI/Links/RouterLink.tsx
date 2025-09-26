import { Link } from "react-router-dom";
import { IRouterLinkProps } from "@components/UI/Links/types";
import styles from "./Links.module.scss";

export function RouterLink({ to, children, icon: Icon }: IRouterLinkProps) {
	if (!children && !Icon) return;

	return (
		<Link className={styles.link} to={to}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</Link>
	);
}
