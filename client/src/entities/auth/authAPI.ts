import axios from "axios";
import { IAuthData, IUser } from "entities/auth/types";
import { API_ENDPOINTS } from "shared/constants/urls";

export async function authAPI(url: string, data: IAuthData): Promise<{ user: IUser }> {
	const response = await axios.post(url, data);
	return response.data;
}

export async function logoutAPI(): Promise<{ message: string }> {
	const response = await axios.get(API_ENDPOINTS.AUTH.LOGOUT);
	return response.data;
}

export async function currentUserAPI(): Promise<{ user: IUser }> {
	const response = await axios.get(API_ENDPOINTS.AUTH.ME);
	return response.data;
}
