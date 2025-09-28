import { Link } from "shared/UI/Links";
import { Settings } from "../Settings";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import GithubIcon from "assets/icons/github.svg";
import styles from "./Footer.module.scss";

const GITHUB_REPO_URL = "https://mmkrivosheev.github.io/task-manager";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Link href={GITHUB_REPO_URL} icon={createSizedIcon(GithubIcon, 26, 26)}></Link>
					<Settings />
				</div>
			</div>
		</footer>
	);
}
