import * as userService from "../services/userService.js";
import { getJwtCookieOptions } from "../utils/common.js";

export async function register(ctx) {
	try {
		const { email, password } = ctx.request.body;
		const { user, token } = await userService.registerUser(email, password);
		ctx.cookies.set("jwt", token, getJwtCookieOptions());
		ctx.body = { user: user };
	} catch (err) {
		ctx.status = 420;
		ctx.body = { error: err.message };
	}
}

export async function login(ctx) {
	try {
		const { email, password } = ctx.request.body;
		const { user, token } = await userService.loginUser(email, password);
		ctx.cookies.set("jwt", token, getJwtCookieOptions());
		ctx.body = { user: user };
	} catch (err) {
		ctx.status = 401;
		ctx.body = { error: err.message };
	}
}

export function me(ctx) {
	ctx.body = { user: ctx.state.user };
}
