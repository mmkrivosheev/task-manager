import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

interface ILogoProps {
	to: string;
	children: ReactNode;
}

export const Logo = ({ children, to }: ILogoProps) => {
	return (
		<Link to={to} className={styles.logo}>
			{children}
		</Link>
	);
};
