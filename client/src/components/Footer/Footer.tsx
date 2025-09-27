import { Link } from "@components/UI/Links";
import { Settings } from "@components/Settings";
import { SizedSVGIcon } from "@HOC/SizedSVGIcon";
import GithubIcon from "@assets/icons/github.svg";
import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Link
						href="https://mmkrivosheev.github.io/task-manager"
						icon={SizedSVGIcon(GithubIcon, 24, 24)}
					>
						GitHub
					</Link>
					<Settings />
				</div>
			</div>
		</footer>
	);
}
