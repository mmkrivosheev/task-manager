import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../db/fileDB.js";

export const getTasks = () => {
	return readData("tasks");
};

export const createTask = (title, description, userId) => {
	const tasks = readData("tasks");
	const newTask = {
		id: uuidv4(),
		title,
		description,
		userId,
		createdAt: new Date().toISOString(),
		completed: false,
	};
	tasks.push(newTask);
	writeData("tasks", tasks);
	return newTask;
};
