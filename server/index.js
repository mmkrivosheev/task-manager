import path from "path";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import { rootDir } from "./utils/paths.js";
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/tasks.js";
import { PORT } from "./config/index.js";
import { fallback } from "./middlewares/static.js";
import { staticOptions } from "./config/static.js";

const app = new Koa();
const buildPath = path.join(rootDir, "../client/build");

app.use(bodyParser());

app.use(authRoutes.routes()).use(authRoutes.allowedMethods());
app.use(taskRoutes.routes()).use(taskRoutes.allowedMethods());

app.use(serve(buildPath, staticOptions));
app.use(fallback(buildPath));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
