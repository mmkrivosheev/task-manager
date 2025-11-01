import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState, IModal, IToast } from "entities/app/types";

const initialState: IAppState = {
	toast: null,
	modal: null,
	isSidebarOpen: true,
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
		openSidebar(state) {
			state.isSidebarOpen = true;
		},
		closeSidebar(state) {
			state.isSidebarOpen = false;
		},
		toggleSidebar(state) {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
	},
});

export const { showToast, clearToast, openModal, closeModal, openSidebar, closeSidebar, toggleSidebar } =
	appSlice.actions;
export default appSlice.reducer;
