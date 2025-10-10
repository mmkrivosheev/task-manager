import fs from "fs";
import path from "path";
import { setCacheHeaders } from "../config/static.js";

export function fallback(buildPath) {
	return async (ctx, next) => {
		if (ctx.method === "GET" && !ctx.path.startsWith("/api")) {
			const filePath = path.join(buildPath, "index.html");
			setCacheHeaders(ctx.res, filePath);
			ctx.type = "html";
			ctx.body = fs.createReadStream(path.join(buildPath, "index.html"));
		} else {
			await next();
		}
	};
}
