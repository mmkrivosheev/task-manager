export interface IAppState {
	toast: IToast | null;
	modal: IModal;
}

export interface IToast {
	message: string;
	type: "success" | "error" | "info";
	duration?: number;
}
export interface IOpenModalPayload {
	title: string;
	type: "editCard" | "createCard" | string;
	props: object;
}

export interface IModal extends IOpenModalPayload {
	isOpen: boolean;
}
