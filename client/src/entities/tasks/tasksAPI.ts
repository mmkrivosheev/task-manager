import axios from "axios";
import { ITask } from "entities/tasks/types";
import { API_ENDPOINTS } from "shared/constants/apiEndpoints";

export async function tasksAPI(): Promise<{ tasks: ITask[] }> {
	const response = await axios.get(API_ENDPOINTS.TASKS);
	return response.data;
}
