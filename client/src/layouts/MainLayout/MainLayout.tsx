import { Outlet } from "react-router-dom";
import { Header } from "shared/UI/Header";
import { Footer } from "shared/UI/Footer";
import { Main } from "shared/UI/Main";

export function MainLayout() {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
}
