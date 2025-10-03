import fs from "fs";
import path from "path";

export function fallback(buildPath) {
	return async (ctx, next) => {
		if (ctx.method === "GET" && !ctx.path.startsWith("/api")) {
			ctx.type = "html";
			ctx.body = fs.createReadStream(path.join(buildPath, "index.html"));
		} else {
			await next();
		}
	};
}
