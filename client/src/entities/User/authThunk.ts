import { AxiosError } from "axios";
import { AppDispatch } from "app/store";
import { auth } from "./authAPI";
import { authStart, authSuccess, authFailure } from "./authSlice";
import { IPayload } from "shared/UI/AuthForms/types";
import { API_ENDPOINTS } from "shared/constants/apiEndpoints";
import { IUser } from "entities/User/types";

export const loginUser = (payload: IPayload) => async (dispatch: AppDispatch) => {
	try {
		dispatch(authStart());
		const data: { user: IUser } = await auth(API_ENDPOINTS.AUTH.LOGIN, payload);
		dispatch(authSuccess(data));
		return true;
	} catch (err) {
		const error = err as AxiosError<{ error: string }>;
		dispatch(authFailure(error.response?.data.error || error.message));
	}
};

export const registerUser = (payload: IPayload) => async (dispatch: AppDispatch) => {
	try {
		dispatch(authStart());
		const data: { user: IUser } = await auth(API_ENDPOINTS.AUTH.REGISTER, payload);
		dispatch(authSuccess(data));
		return true;
	} catch (err) {
		const error = err as AxiosError<{ error: string }>;
		dispatch(authFailure(error.response?.data.error || error.message));
	}
};
