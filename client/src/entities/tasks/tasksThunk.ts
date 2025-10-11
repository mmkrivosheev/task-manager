import { AppDispatch } from "app/store/store";
import {
	addTaskSuccess,
	deleteTaskSuccess,
	fetchTasksSuccess,
	tasksFailure,
	tasksStart,
	updateTaskSuccess,
} from "./tasksSlice";
import { addTaskAPI, deleteTTaskAPI, getTasksAPI, updateTaskAPI } from "./tasksAPI";
import { handleAxiosError } from "shared/utils/axiosError";
import { ITask } from "entities/tasks/types";

export function fetchTasks() {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(tasksStart());
			const data = await getTasksAPI();
			dispatch(fetchTasksSuccess(data.tasks));
		} catch (err) {
			dispatch(tasksFailure(handleAxiosError(err)));
		}
	};
}

export function addTask(addedData: Partial<ITask>) {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(tasksStart());
			const data = await addTaskAPI(addedData);
			dispatch(addTaskSuccess(data.task));
			return true;
		} catch (err) {
			dispatch(tasksFailure(handleAxiosError(err)));
		}
	};
}

export function updateTaskById(id: string, updatedData: Partial<ITask>) {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(tasksStart());
			const data = await updateTaskAPI(id, updatedData);
			dispatch(updateTaskSuccess(data.task));
			return true;
		} catch (err) {
			dispatch(tasksFailure(handleAxiosError(err)));
		}
	};
}

export function deleteTaskById(id: string) {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(tasksStart());
			await deleteTTaskAPI(id);
			dispatch(deleteTaskSuccess(id));
			return true;
		} catch (err) {
			dispatch(tasksFailure(handleAxiosError(err)));
		}
	};
}
