import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "entities/auth/types";

const initialState: IAuthState = {
	user: null,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authStart(state) {
			state.loading = true;
			state.error = null;
		},
		authSuccess(state, action: PayloadAction<{ user: IUser }>) {
			state.user = action.payload.user;
			state.loading = false;
		},
		authFailure(state, action: PayloadAction<string>) {
			state.error = action.payload;
			state.loading = false;
		},
		logoutSuccess(state) {
			state.user = null;
			state.error = null;
			state.loading = false;
		},
		clearError(state) {
			state.error = null;
		},
	},
});

export const { authStart, authSuccess, authFailure, logoutSuccess, clearError } = authSlice.actions;
export default authSlice.reducer;
