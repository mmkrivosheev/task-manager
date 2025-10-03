import { Route, Routes, Navigate } from "react-router-dom";
import { MainLayout } from "layouts/MainLayout";
import { NotFoundPage } from "pages/NotFoundPage";
import { privateRoutes, publicRoutes } from "./routes";
import { useAppSelector } from "app/store/hooks";

export function Router() {
	const { user } = useAppSelector(state => state.auth);
	const routes = user ? privateRoutes : publicRoutes;

	return (
		<Routes>
			<Route element={<MainLayout />}>
				{routes.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={"to" in route ? <Navigate to={route.to} replace /> : <route.component />}
						/>
					);
				})}
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
