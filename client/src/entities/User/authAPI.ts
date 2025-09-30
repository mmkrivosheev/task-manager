import axios from "axios";
import { IUser } from "./authSlice";
import { IAuthData } from "entities/User/types";

export const auth = async (url: string, data: IAuthData): Promise<{ user: IUser }> => {
	const response = await axios.post(url, data);
	return response.data;
};
