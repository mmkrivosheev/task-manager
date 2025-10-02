import styles from "./SplashScreen.module.scss";

export function SplashScreen() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h1>&#8987; Проверка авторизации…</h1>
			</div>
		</div>
	);
}
