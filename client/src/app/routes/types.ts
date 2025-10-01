import { ComponentType } from "react";

type RouteComponent = {
	path: string;
	component: ComponentType;
};

type RouteRedirect = {
	path: string;
	to: string;
};

export type AppRoute = RouteComponent | RouteRedirect;
