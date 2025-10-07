import { ITask } from "entities/tasks/types";

export interface ITaskCardProps extends ITask {
	onClick: () => void;
}

export interface ITaskCardErrors {
	title?: string;
}
