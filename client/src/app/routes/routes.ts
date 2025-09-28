import { GuestPage } from "pages/GuestPage";
import { LoginPage } from "pages/LoginPage";
import { RegistrationPage } from "pages/RegistrationPage";

export const privateRoutes = [];

export const publicRoutes = [
	{ path: "/", component: GuestPage },
	{ path: "/login", component: LoginPage },
	{ path: "/registration", component: RegistrationPage },
];
