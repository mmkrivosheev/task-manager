export interface IAppState {
	toast: IToast | null;
}

export interface IToast {
	message: string;
	type: "success" | "error" | "info";
	duration?: number;
}
