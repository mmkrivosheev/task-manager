import axios from "axios";
import { ITask } from "entities/tasks/types";
import { API_ENDPOINTS } from "shared/constants/apiEndpoints";

export async function getTasksAPI(): Promise<{ tasks: ITask[] }> {
	const response = await axios.get(API_ENDPOINTS.TASKS.BASE);
	return response.data;
}

export async function addTaskAPI(data: Partial<ITask>): Promise<{ task: ITask }> {
	const response = await axios.post(API_ENDPOINTS.TASKS.BASE, data);
	return response.data;
}

export async function updateTaskAPI(id: string, data: Partial<ITask>): Promise<{ task: ITask }> {
	const response = await axios.patch(API_ENDPOINTS.TASKS.BY_ID(id), data);
	return response.data;
}

export async function deleteTTaskAPI(id: string): Promise<{ message: string }> {
	const response = await axios.delete(API_ENDPOINTS.TASKS.BY_ID(id));
	return response.data;
}
