import { AxiosError } from "axios";
import { AppDispatch } from "app/store/store";
import { authAPI, currentUserAPI, logoutAPI } from "./authAPI";
import { authStart, authSuccess, authFailure, logout } from "./authSlice";
import { IPayload } from "shared/UI/AuthForms/types";
import { API_ENDPOINTS } from "shared/constants/apiEndpoints";

function authUser(url: string, payload: IPayload) {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authStart());
			const data = await authAPI(url, payload);
			dispatch(authSuccess(data));
			return true;
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			dispatch(authFailure(error.response?.data.error || error.message));
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
			await logoutAPI(API_ENDPOINTS.AUTH.LOGOUT);
			dispatch(logout());
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			dispatch(authFailure(error.response?.data.error || error.message));
		}
	};
}

export function fetchCurrentUser() {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authStart());
			const data = await currentUserAPI(API_ENDPOINTS.AUTH.ME);
			dispatch(authSuccess(data));
		} catch {
			dispatch(logout());
		}
	};
}
