import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState, IToast } from "entities/app/types";

const initialState: IAppState = {
	toast: null,
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
	},
});

export const { showToast, clearToast } = appSlice.actions;
export default appSlice.reducer;
