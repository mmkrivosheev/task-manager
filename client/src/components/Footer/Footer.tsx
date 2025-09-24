import { Link } from "@components/UI/Links/Link";
import { Clock } from "@components/UI/Clock";
import { Settings } from "@components/Settings";
import GithubIcon from "@assets/icons/github.svg";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Link href="https://github.com" icon={GithubIcon}>
						GitHub
					</Link>
					<div className={styles.clockWrapper}>
						{/*<Clock />*/}
						<Settings />
					</div>
				</div>
			</div>
		</footer>
	);
};
