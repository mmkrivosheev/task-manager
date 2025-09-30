export interface IUser {
	id: string;
	email: string;
}

export interface IAuthState {
	user: IUser | null;
	loading: boolean;
	error: string | null;
}

export interface IAuthData {
	email: string;
	password: string;
}
