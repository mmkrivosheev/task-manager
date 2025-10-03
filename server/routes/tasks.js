import Router from "koa-router";
import { getAllTasks, createNewTask } from "../controllers/taskController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = new Router({ prefix: "/api/tasks" });

router.get("/", authMiddleware, getAllTasks);
router.post("/", authMiddleware, validateBody(["title", "description"]), createNewTask);

export default router;
