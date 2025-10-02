import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

export async function authMiddleware(ctx, next) {
	const token = ctx.cookies?.get("jwt");
	if (!token) {
		ctx.body = { user: null };
		return;
	}

	try {
		ctx.state.user = jwt.verify(token, JWT_SECRET);
		await next();
	} catch {
		ctx.body = { user: null };
	}
}
