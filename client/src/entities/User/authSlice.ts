import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "entities/User/types";

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
			state.loading = false;
			state.user = action.payload.user;
		},
		authFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
		logout(state) {
			state.user = null;
			state.loading = false;
			state.error = null;
		},
	},
});

export const { authStart, authSuccess, authFailure, logout } = authSlice.actions;
export default authSlice.reducer;
