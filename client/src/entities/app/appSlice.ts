import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState, IOpenModalPayload, IToast } from "entities/app/types";

const initialState: IAppState = {
	toast: null,
	modal: {
		isOpen: false,
		title: "",
		type: "",
		props: {},
	},
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
		openModal: (state, action: PayloadAction<IOpenModalPayload>) => {
			state.modal.title = action.payload.title;
			state.modal.type = action.payload.type;
			state.modal.props = action.payload.props;
		},
		closeModal: state => {
			state.modal.isOpen = false;
			state.modal.title = "";
			state.modal.type = "";
			state.modal.props = {};
		},
	},
});

export const { showToast, clearToast, openModal, closeModal } = appSlice.actions;
export default appSlice.reducer;
