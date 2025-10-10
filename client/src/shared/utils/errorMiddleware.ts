import { Middleware } from "@reduxjs/toolkit";
import { clearError as authClearError } from "entities/auth/authSlice";
import { clearError as tasksClearError } from "entities/tasks/tasksSlice";
import { showToast } from "entities/app/appSlice";

export const errorMiddleware: Middleware = store => next => action => {
	const result = next(action);
	const typedAction = action as Record<"type" | "payload", string>;
	if (typedAction.type.endsWith("Failure")) {
		const errorMessage = typedAction.payload;
		store.dispatch(showToast({ message: errorMessage, type: "error" }));
		if (typedAction.type.startsWith("auth")) {
			store.dispatch(authClearError());
		}
		if (typedAction.type.startsWith("tasks")) {
			store.dispatch(tasksClearError());
		}
	}
	return result;
};
