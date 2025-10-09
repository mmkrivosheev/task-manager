import * as taskService from "../services/taskService.js";

export function getAllTasks(ctx) {
	const tasks = taskService.getTasks(ctx.state.user.id);
	ctx.body = { tasks };
}

export function createNewTask(ctx) {
	try {
		const { title, description = "", status } = ctx.request.body;
		const userId = ctx.state.user.id;
		const task = taskService.createTask(title, description, status, userId);
		ctx.body = { message: "Task created", task };
	} catch (err) {
		ctx.status = 400;
		ctx.body = { error: err.message };
	}
}

export function patchTask(ctx) {
	try {
		const { id } = ctx.params;
		const userId = ctx.state.user.id;
		const updates = ctx.request.body;
		const updatedTask = taskService.updateTaskById(id, userId, updates);
		ctx.body = { message: "Task updated", task: updatedTask };
	} catch (err) {
		ctx.status = 404;
		ctx.body = { error: err.message };
	}
}

export async function deleteTask(ctx) {
	try {
		const { id } = ctx.params;
		const userId = ctx.state.user.id;
		await taskService.deleteTaskById(id, userId);
		ctx.body = { message: "Task deleted" };
	} catch (err) {
		ctx.status = 500;
		ctx.body = { error: err.message };
	}
}
