import { ElementType, ReactNode } from "react";

export interface ILinkCommonProps {
	children?: ReactNode;
	icon?: ElementType;
}

export interface ILinkProps extends ILinkCommonProps {
	href: string;
}

export interface IRouterLinkProps extends ILinkCommonProps {
	to: string;
}
