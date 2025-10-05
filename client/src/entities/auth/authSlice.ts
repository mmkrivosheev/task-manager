import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "entities/auth/types";

const initialState: IAuthState = {
	user: null,
	isLoading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		authSuccess(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
			state.isLoading = false;
		},
		authFailure(state, action: PayloadAction<string>) {
			state.error = action.payload;
			state.isLoading = false;
		},
		logout(state) {
			state.user = null;
			state.error = null;
			state.isLoading = false;
		},
		clearError(state) {
			state.error = null;
		},
	},
});

export const { authStart, authSuccess, authFailure, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
