import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState, IModal, IToast } from "entities/app/types";

const getInitialSidebar = (): boolean => {
	const saved = localStorage.getItem("isSidebarOpen");
	return saved === null ? true : saved === "true";
};

const initialState: IAppState = {
	toast: null,
	modal: null,
	isSidebarOpen: getInitialSidebar(),
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		showToast(state, action: PayloadAction<IToast>) {
			state.toast = action.payload;
		},
		clearToast(state) {
			state.toast = null;
		},
		openModal: (state, action: PayloadAction<IModal>) => {
			state.modal = action.payload;
		},
		closeModal: state => {
			state.modal = null;
		},
		toggleSidebar(state) {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
	},
});

export const { showToast, clearToast, openModal, closeModal, toggleSidebar } = appSlice.actions;
export default appSlice.reducer;
