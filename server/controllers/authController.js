import * as userService from "../services/userService.js";

export const register = async ctx => {
	try {
		const { email, password } = ctx.request.body;
		const user = await userService.registerUser(email, password);
		ctx.body = { message: "User registered", user };
	} catch (err) {
		ctx.status = 420;
		ctx.body = { error: err.message };
	}
};

export const login = async ctx => {
	try {
		const { email, password } = ctx.request.body;
		ctx.body = await userService.loginUser(email, password);
	} catch (err) {
		ctx.status = 400;
		ctx.body = { error: err.message };
	}
};

export const me = async ctx => {
	ctx.body = { user: ctx.state.user };
};
