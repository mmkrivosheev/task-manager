import { Link } from "@components/UI/Links/Link";
import { Settings } from "@components/Settings";
import GithubIcon from "@assets/icons/github.svg";
import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Link href="https://mmkrivosheev.github.io/task-manager" icon={GithubIcon}>
						GitHub
					</Link>
					<Settings />
				</div>
			</div>
		</footer>
	);
}
