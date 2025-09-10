import { GithubLink } from "@components/UI/GithubLink";
import { Clock } from "@components/UI/Clock";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<GithubLink>GitHub</GithubLink>
					<div className={styles.clockWrapper}>
						<Clock />
					</div>
				</div>
			</div>
		</footer>
	);
};
