import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

export async function authMiddleware(ctx, next) {
	const authHeader = ctx.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		ctx.status = 401;
		ctx.body = { error: "Unauthorized" };
		return;
	}

	const token = authHeader.split(" ")[1];
	try {
		ctx.state.user = jwt.verify(token, JWT_SECRET);
		await next();
	} catch {
		ctx.status = 401;
		ctx.body = { error: "Invalid token" };
	}
}
