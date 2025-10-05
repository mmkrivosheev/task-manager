import { AxiosError } from "axios";
import { AppDispatch } from "app/store/store";
import { fetchTasksSuccess, tasksFailure, tasksStart } from "./tasksSlice";
import { tasksAPI } from "./tasksAPI";

export function fetchTasks() {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(tasksStart());
			const data = await tasksAPI();
			dispatch(fetchTasksSuccess(data.tasks));
		} catch (err) {
			const error = err as AxiosError<{ error: string }>;
			dispatch(tasksFailure(error.response?.data.error || error.message));
		}
	};
}
