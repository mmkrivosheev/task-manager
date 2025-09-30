import { Route, Routes } from "react-router-dom";
import { MainLayout } from "layouts/MainLayout";
import { NotFoundPage } from "pages/NotFoundPage";
import { privateRoutes, publicRoutes } from "./routes";
import { useAppSelector } from "shared/hooks/redux";

export const Router = () => {
	const { user } = useAppSelector(state => state.auth);
	const routes = user ? privateRoutes : publicRoutes;

	return (
		<Routes>
			<Route element={<MainLayout />}>
				{routes.map(({ path, component: Component }) => {
					return <Route key={path} path={path} element={<Component />} />;
				})}
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};
