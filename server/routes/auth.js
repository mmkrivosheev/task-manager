import Router from "koa-router";
import { register, login, me, logout } from "../controllers/authController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = new Router({ prefix: "/api/auth" });

router.post("/register", validateBody(["email", "password"]), register);
router.post("/login", validateBody(["email", "password"]), login);
router.get("/me", authMiddleware, me);
router.get("/logout", logout);

export default router;
