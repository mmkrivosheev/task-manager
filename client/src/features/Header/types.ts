import { ElementType } from "react";

export interface INavItem {
	to: string;
	component: React.ElementType;
	label?: string;
	icon?: ElementType;
	end?: boolean;
}
