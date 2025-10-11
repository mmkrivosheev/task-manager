import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, ITasksState } from "entities/tasks/types";

const initialState: ITasksState = {
	items: [],
	searchQuery: "",
	isLoading: false,
	error: null,
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		tasksStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchTasksSuccess(state, action: PayloadAction<ITask[]>) {
			state.items = action.payload;
			state.isLoading = false;
		},
		addTaskSuccess(state, action: PayloadAction<ITask>) {
			state.items.push(action.payload);
			state.isLoading = false;
		},
		updateTaskSuccess(state, action: PayloadAction<ITask>) {
			const index = state.items.findIndex(item => item.id === action.payload.id);
			if (index !== -1) state.items[index] = action.payload;
			state.isLoading = false;
		},
		deleteTaskSuccess(state, action: PayloadAction<string>) {
			state.items = state.items.filter(item => item.id !== action.payload);
			state.isLoading = false;
		},
		tasksFailure(state, action: PayloadAction<string>) {
			state.error = action.payload;
			state.isLoading = false;
		},
		clearError(state) {
			state.error = null;
		},
		setSearchQuery(state, action: PayloadAction<string>) {
			state.searchQuery = action.payload;
		},
	},
});

export const {
	tasksStart,
	fetchTasksSuccess,
	addTaskSuccess,
	updateTaskSuccess,
	deleteTaskSuccess,
	tasksFailure,
	clearError,
	setSearchQuery,
} = tasksSlice.actions;
export default tasksSlice.reducer;
