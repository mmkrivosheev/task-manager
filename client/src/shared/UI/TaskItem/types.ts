import { ITask } from "entities/tasks/types";

export interface ITaskProps extends ITask {
	onClick: (id: string) => void;
}
