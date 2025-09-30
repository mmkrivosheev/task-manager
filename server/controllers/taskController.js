import * as taskService from "../services/taskService.js";

export function getAllTasks(ctx) {
	const tasks = taskService.getTasks();
	ctx.body = tasks;
}

export function createNewTask(ctx) {
	try {
		const { title, description } = ctx.request.body;
		const userId = ctx.state.user.id;
		const task = taskService.createTask(title, description, userId);
		ctx.body = { message: "Task created", task };
	} catch (err) {
		ctx.status = 400;
		ctx.body = { error: err.message };
	}
}
