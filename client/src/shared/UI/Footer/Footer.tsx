import { Link } from "shared/UI/Links";
import { Settings } from "shared/UI/Settings";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { GITHUB_REPO_URL } from "shared/constants/urls";
import GithubIcon from "assets/icons/github.svg";
import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href={GITHUB_REPO_URL}
						icon={createSizedIcon(GithubIcon, 26, 26)}
					></Link>
					<Settings />
				</div>
			</div>
		</footer>
	);
}
