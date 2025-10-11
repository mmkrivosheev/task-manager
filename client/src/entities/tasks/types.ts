export interface ITask {
	id: string;
	userId: string;
	title: string;
	createdAt: string;
	status: "todo" | "inProgress" | "done";
	description?: string;
	updatedAt?: string;
}

export interface ITasksState {
	items: ITask[];
	searchQuery: string;
	isLoading: boolean;
	error: string | null;
}
