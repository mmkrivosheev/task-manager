import { Outlet } from "react-router-dom";
import { Header } from "shared/UI/Header";
import { Footer } from "shared/UI/Footer";
import styles from "./MainLayout.module.scss";

export function MainLayout() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
