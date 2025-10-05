export interface ITask {
	id: string;
	userId: string;
	title: string;
	createdAt: string;
	status: "todo" | "inProgress" | "done";
	description?: string;
}

export interface ITasksState {
	items: ITask[];
	isLoading: boolean;
	error: string | null;
}
