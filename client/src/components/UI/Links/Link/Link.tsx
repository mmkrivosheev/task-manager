import { ElementType, ReactNode } from "react";
import styles from "./Link.module.scss";

interface ILinkProps {
	children: ReactNode;
	href: string;
	icon?: ElementType;
}

export const Link = ({ children, href, icon: Icon }: ILinkProps) => {
	return (
		<a href={href} target="_blank" rel="noreferrer" className={styles.link}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</a>
	);
};
