import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import fs from "fs";
import path from "path";
import { rootDir } from "./utils/paths.js";
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/tasks.js";
import { PORT } from "./config/index.js";

const app = new Koa();
const buildPath = path.join(rootDir, "../client/build");

app.use(bodyParser());

app.use(async (ctx, next) => {
	if (ctx.method === "OPTIONS") {
		ctx.status = 204;
		return;
	}
	await next();
});

app.use(authRoutes.routes()).use(authRoutes.allowedMethods());
app.use(taskRoutes.routes()).use(taskRoutes.allowedMethods());

app.use(serve(buildPath));

app.use(async (ctx, next) => {
	if (!ctx.path.startsWith("/api")) {
		ctx.type = "html";
		ctx.body = fs.createReadStream(path.join(buildPath, "index.html"));
	} else {
		await next();
	}
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
