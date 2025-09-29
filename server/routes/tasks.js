import Router from "koa-router";
import { getAllTasks, createNewTask } from "../controllers/taskController.js";
import { validateBody } from "../middleware/validateBody.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = new Router({ prefix: "/api/tasks" });

router.get("/", authMiddleware, getAllTasks);
router.post("/", authMiddleware, validateBody(["title", "description"]), createNewTask);

export default router;
