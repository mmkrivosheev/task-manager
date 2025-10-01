import { GuestPage } from "pages/GuestPage";
import { LoginPage } from "pages/LoginPage";
import { RegistrationPage } from "pages/RegistrationPage";
import { TasksPage } from "pages/TasksPage";
import { AppRoute } from "app/routes/types";

export const privateRoutes: AppRoute[] = [
	{ path: "/", to: "/tasks" },
	{ path: "/login", to: "/tasks" },
	{ path: "/registration", to: "/tasks" },
	{ path: "/tasks", component: TasksPage },
];

export const publicRoutes: AppRoute[] = [
	{ path: "/", component: GuestPage },
	{ path: "/login", component: LoginPage },
	{ path: "/registration", component: RegistrationPage },
	{ path: "/tasks", to: "/" },
];
