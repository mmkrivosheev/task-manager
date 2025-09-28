import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "pages/NotFoundPage";
import { publicRoutes } from "./routes";

export const Router = () => {
	return (
		<Routes>
			{publicRoutes.map(({ path, component: Component }) => {
				return <Route key={path} path={path} element={<Component />} />;
			})}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};
