import { configureStore } from "@reduxjs/toolkit";
import authReducer from "entities/auth/authSlice";
import tasksReducer from "entities/tasks/tasksSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		tasks: tasksReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
