import GithubIcon from "@assets/icons/github.svg";
import { ReactNode } from "react";
import styles from "./GithubLink.module.scss";

interface GithubLinkProps {
	children: ReactNode;
}

export const GithubLink = ({ children }: GithubLinkProps) => {
	return (
		<a href="https://github.com" target="_blank" rel="noreferrer" className={styles.link}>
			<GithubIcon className={styles.icon} />
			{children}
		</a>
	);
};
