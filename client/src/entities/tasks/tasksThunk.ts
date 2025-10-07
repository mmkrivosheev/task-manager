import { AxiosError } from "axios";
import { AppDispatch } from "app/store/store";
import {
	deleteTaskSuccess,
	fetchTasksSuccess,
	tasksFailure,
	tasksStart,
	updateTaskSuccess,
} from "./tasksSlice";
import { deleteTTaskAPI, getTasksAPI, updateTaskAPI } from "./tasksAPI";
import { ITask } from "entities/tasks/types";

export function fetchTasks() {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(tasksStart());
			const data = await getTasksAPI();
			dispatch(fetchTasksSuccess(data.tasks));
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			dispatch(tasksFailure(error.response?.data.error || error.message));
		}
	};
}

export function updateTaskById(id: string, updatedData: Partial<ITask>) {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(tasksStart());
			const data = await updateTaskAPI(id, updatedData);
			dispatch(updateTaskSuccess(data.task));
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			dispatch(tasksFailure(error.response?.data.error || error.message));
		}
	};
}

export function deleteTaskById(id: string) {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(tasksStart());
			await deleteTTaskAPI(id);
			dispatch(deleteTaskSuccess(id));
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			dispatch(tasksFailure(error.response?.data.error || error.message));
		}
	};
}
