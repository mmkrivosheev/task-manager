import { v4 as uuidv4 } from "uuid";
import tasksDB from "../db/tasksDB.js";

export function getTasks(userId) {
	return tasksDB.read().filter(item => item.userId === userId);
}

export function createTask(title, description, status, userId) {
	const tasks = tasksDB.read();
	const newTask = {
		id: uuidv4(),
		title,
		description,
		status,
		userId,
		createdAt: new Date().toISOString(),
	};
	tasks.push(newTask);
	tasksDB.write(tasks);
	return newTask;
}

export function updateTaskById(taskId, userId, updates) {
	const tasks = tasksDB.read();
	const index = tasks.findIndex(task => task.id === taskId && task.userId === userId);
	if (index === -1) {
		throw new Error("Task not found");
	}
	const updatedTask = {
		...tasks[index],
		...updates,
		updatedAt: new Date().toISOString(),
	};
	tasks[index] = updatedTask;
	tasksDB.write(tasks);
	return updatedTask;
}

export function deleteTaskById(taskId, userId) {
	const tasks = tasksDB.read();
	const index = tasks.findIndex(task => task.id === taskId && task.userId === userId);
	if (index === -1) {
		throw new Error("Task not found");
	}
	const deletedTask = tasks[index];
	tasks.splice(index, 1);
	tasksDB.write(tasks);
	return deletedTask;
}
