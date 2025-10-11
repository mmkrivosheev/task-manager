import { AppDispatch } from "app/store/store";
import { authAPI, currentUserAPI, logoutAPI } from "./authAPI";
import { authStart, authSuccess, authFailure, logout } from "./authSlice";
import { IPayload } from "shared/UI/AuthForms/types";
import { API_ENDPOINTS } from "shared/constants/urls";
import { handleAxiosError } from "shared/utils/axiosError";

function authUser(url: string, payload: IPayload) {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authStart());
			const data = await authAPI(url, payload);
			dispatch(authSuccess(data.user));
			return true;
		} catch (err) {
			dispatch(authFailure(handleAxiosError(err)));
		}
	};
}

export function loginUser(payload: IPayload) {
	return authUser(API_ENDPOINTS.AUTH.LOGIN, payload);
}

export function registerUser(payload: IPayload) {
	return authUser(API_ENDPOINTS.AUTH.REGISTER, payload);
}

export function logoutUser() {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authStart());
			await logoutAPI();
			dispatch(logout());
		} catch (err) {
			dispatch(authFailure(handleAxiosError(err)));
		}
	};
}

export function fetchCurrentUser() {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authStart());
			const data = await currentUserAPI();
			dispatch(authSuccess(data.user));
		} catch {
			dispatch(logout());
		}
	};
}
