import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

export async function authMiddleware(ctx, next) {
	const token = ctx.cookies?.get("jwt");
	if (!token) {
		ctx.status = 401;
		ctx.body = { error: "Unauthorized" };
		return;
	}

	try {
		ctx.state.user = jwt.verify(token, JWT_SECRET);
		await next();
	} catch {
		ctx.status = 401;
		ctx.body = { error: "Invalid token" };
	}
}
