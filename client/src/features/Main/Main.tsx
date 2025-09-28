import styles from "./Main.module.scss";

export function Main() {
	return (
		<main className={styles.main}>
			<h1>Приветствую!</h1>
			<p>
				Для входа без регистрации используйте логин и пароль <i>user</i>
			</p>
		</main>
	);
}
