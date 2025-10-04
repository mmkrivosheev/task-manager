import axios from "axios";
import { IAuthData, IUser } from "entities/auth/types";

export async function authAPI(url: string, data: IAuthData): Promise<{ user: IUser }> {
	const response = await axios.post(url, data);
	return response.data;
}

export async function logoutAPI(url: string): Promise<{ message: string }> {
	const response = await axios.get(url);
	return response.data;
}

export async function currentUserAPI(url: string): Promise<{ user: IUser }> {
	const response = await axios.get(url);
	return response.data;
}
