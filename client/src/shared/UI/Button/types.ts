import { ElementType, ReactNode } from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	icon?: ElementType;
	block?: boolean;
	variant?: "outlined" | "link";
	onClick?: () => void;
}
