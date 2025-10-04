export interface IUser {
	id: string;
	email: string;
}

export interface IAuthState {
	user: IUser | null;
	isLoading: boolean;
	error: string | null;
}

export interface IAuthData {
	email: string;
	password: string;
}
