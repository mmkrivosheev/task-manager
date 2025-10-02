import axios from "axios";
import { IAuthData, IUser } from "entities/User/types";

export async function auth(url: string, data: IAuthData): Promise<{ user: IUser }> {
	const response = await axios.post(url, data);
	return response.data;
}

export async function currentUser(url: string): Promise<{ user: IUser }> {
	const response = await axios.get(url);
	return response.data;
}

export async function logout(url: string) {
	axios.get(url);
}
