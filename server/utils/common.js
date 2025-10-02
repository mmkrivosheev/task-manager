import path from "path";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import { JWT_SECRET } from "../config/index.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
export const rootDir = path.join(dirname, "..");

export function getJwtCookieOptions() {
	return {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "Lax",
		path: "/",
		maxAge: 3600000,
	};
}

export function generateJwtToken(user) {
	return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
}
