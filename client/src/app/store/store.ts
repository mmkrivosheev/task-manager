import { configureStore } from "@reduxjs/toolkit";
import appReducer from "entities/app/appSlice";
import authReducer from "entities/auth/authSlice";
import tasksReducer from "entities/tasks/tasksSlice";
import { errorMiddleware } from "shared/utils/errorMiddleware";

export const store = configureStore({
	reducer: {
		app: appReducer,
		auth: authReducer,
		tasks: tasksReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
