import { GuestPage } from "pages/GuestPage";
import { LoginPage } from "pages/LoginPage";
import { RegistrationPage } from "pages/RegistrationPage";
import { TasksPage } from "pages/TasksPage";

export const privateRoutes = [{ path: "/tasks", component: TasksPage }];

export const publicRoutes = [
	{ path: "/", component: GuestPage },
	{ path: "/login", component: LoginPage },
	{ path: "/registration", component: RegistrationPage },
];
