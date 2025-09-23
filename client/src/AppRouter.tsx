import { Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/HomePage";
import { LoginPage } from "@pages/LoginPage";
import { RegistrationPage } from "@pages/RegistrationPage";
import { NotFoundPage } from "@pages/NotFoundPage";

export const privateRoutes = [];

export const publicRoutes = [
	{ path: "/", component: HomePage },
	{ path: "/login", component: LoginPage },
	{ path: "/registration", component: RegistrationPage },
];

export const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map(route => (
				<Route key={route.path} path={route.path} element={<route.component />} />
			))}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};
