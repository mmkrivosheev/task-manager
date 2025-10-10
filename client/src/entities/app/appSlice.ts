import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState, IToast } from "entities/app/types";

const initialState: IAppState = {
	isTaskModalOpen: false,
	toast: null,
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		openTaskModal(state) {
			state.isTaskModalOpen = true;
		},
		closeTaskModal(state) {
			state.isTaskModalOpen = false;
		},
		showToast(state, action: PayloadAction<IToast>) {
			state.toast = action.payload;
		},
		clearToast(state) {
			state.toast = null;
		},
	},
});

export const { openTaskModal, closeTaskModal, showToast, clearToast } = appSlice.actions;
export default appSlice.reducer;
