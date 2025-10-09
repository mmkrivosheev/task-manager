import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

export function generateJwtToken(user) {
	return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
}

export function getJwtCookieOptions(maxAge = 3600000) {
	return {
		httpOnly: true,
		// secure: process.env.NODE_ENV === "production",
		sameSite: "Lax",
		path: "/",
		maxAge,
	};
}
