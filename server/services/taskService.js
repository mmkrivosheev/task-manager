import { v4 as uuidv4 } from "uuid";
import tasksDB from "../db/tasksDB.js";

export function getTasks(userId) {
	return tasksDB.read().filter(item => item.userId === userId);
}

export function createTask(title, description, userId) {
	const tasks = tasksDB.read();
	const newTask = {
		id: uuidv4(),
		title,
		description,
		userId,
		createdAt: new Date().toISOString(),
		completed: false,
	};
	tasks.push(newTask);
	tasksDB.write(tasks);
	return newTask;
}
