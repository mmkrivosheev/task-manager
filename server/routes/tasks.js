import Router from "koa-router";
import { getAllTasks, createNewTask, deleteTask, patchTask } from "../controllers/taskController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = new Router({ prefix: "/api/tasks" });

router.get("/", authMiddleware, getAllTasks);
router.post("/", authMiddleware, validateBody(["title", "description"]), createNewTask);
router.patch("/:id", authMiddleware, validateBody(), patchTask);
router.delete("/:id", authMiddleware, deleteTask);

export default router;
