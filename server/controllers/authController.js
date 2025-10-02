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
	const { id, email } = ctx.state.user;
	ctx.body = { user: { id, email } };
}

export async function logout(ctx) {
	ctx.cookies.set("jwt", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "Lax",
		path: "/",
		maxAge: 0,
	});
	ctx.status = 200;
	ctx.body = { message: "Logged out" };
}
