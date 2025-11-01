export interface IAppState {
	toast: IToast | null;
	modal: IModal | null;
	isSidebarOpen: boolean;
}

export interface IToast {
	message: string;
	type: "success" | "error" | "info";
	duration?: number;
}
export interface IModal {
	title: string;
	type: "editCard" | "createCard" | string;
	data?: object;
}
