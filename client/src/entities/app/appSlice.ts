import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "entities/app/types";

const initialState: IAppState = {
	isTaskModalOpen: false,
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		openTaskModal: state => {
			state.isTaskModalOpen = true;
		},
		closeTaskModal: state => {
			state.isTaskModalOpen = false;
		},
	},
});

export const { openTaskModal, closeTaskModal } = appSlice.actions;
export default appSlice.reducer;
