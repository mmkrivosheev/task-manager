import { Link } from "react-router-dom";
import logo from "@assets/icons/logo.png";
import { ILogoProps } from "@components/UI/Logo/types";
import styles from "./Logo.module.scss";

export function Logo({ to }: ILogoProps) {
	return (
		<Link to={to} className={styles.wrapper}>
			<img className={styles.logo} src={logo} alt="logo" />
		</Link>
	);
}
