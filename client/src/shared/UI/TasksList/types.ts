import { ITasksState } from "entities/tasks/types";

export interface ITasksListProps {
	items: ITasksState["items"];
	onItemClick: (id: string) => void;
}
