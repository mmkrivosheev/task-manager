import styles from "./Main.module.scss";

export const Main = () => {
	return (
		<main className={styles.main}>
			<h1>Приветствую!</h1>
			<p>
				Для быстрого входа без регистрации используйте логин и пароль <strong>user</strong>
			</p>
		</main>
	);
};
