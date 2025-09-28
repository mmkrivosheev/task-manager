import { AnchorHTMLAttributes, ElementType, ReactNode } from "react";
import { LinkProps, NavLinkProps } from "react-router-dom";

interface IBaseLinkProps {
	icon?: ElementType;
}

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, IBaseLinkProps {
	href: string;
	children?: ReactNode;
}

export interface IRouterLinkProps extends LinkProps, IBaseLinkProps {
	children?: ReactNode;
}

export interface IRouterNavLinkProps extends Omit<NavLinkProps, "children">, IBaseLinkProps {
	children?: ReactNode;
}
