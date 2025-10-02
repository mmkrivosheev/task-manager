import { AxiosError } from "axios";
import { AppDispatch } from "app/store";
import { auth, currentUser, logout } from "./authAPI";
import { authStart, authSuccess, authFailure, logoutSuccess } from "./authSlice";
import { IPayload } from "shared/UI/AuthForms/types";
import { API_ENDPOINTS } from "shared/constants/apiEndpoints";
import { IUser } from "entities/User/types";

function authUser(url: string, payload: IPayload) {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authStart());
			const data: { user: IUser } = await auth(url, payload);
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

export function fetchCurrentUser() {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authStart());
			const data: { user: IUser } = await currentUser(API_ENDPOINTS.AUTH.ME);
			dispatch(authSuccess(data));
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			dispatch(authFailure(error.response?.data.error || error.message));
		}
	};
}

export function logoutUser() {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authStart());
			await logout(API_ENDPOINTS.AUTH.LOGOUT);
			dispatch(logoutSuccess());
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			dispatch(authFailure(error.response?.data.error || error.message));
		}
	};
}
