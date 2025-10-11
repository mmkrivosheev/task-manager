import { ITaskCardProps } from "shared/UI/TaskCard/types";

export interface IAppState {
	toast: IToast | null;
	modal: IModal;
}

export interface IToast {
	message: string;
	type: "success" | "error" | "info";
	duration?: number;
}

export interface IModal {
	isOpen: boolean;
	title: string | null;
	type: "editCard" | "createCard" | null;
	props: ITaskCardProps | null;
}
