import { Link } from "react-router-dom";
import logo from "@assets/icons/logo.png";
import styles from "./Logo.module.scss";

interface ILogoProps {
	to: string;
}

export const Logo = ({ to }: ILogoProps) => {
	return (
		<Link to={to} className={styles.wrapper}>
			<img className={styles.logo} src={logo} alt="logo" />
		</Link>
	);
};
