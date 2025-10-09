import { ITask } from "entities/tasks/types";

export interface ITaskCardProps extends Partial<ITask> {
	onSubmit?: () => void;
}

export interface ITaskCardErrors {
	title?: string;
}
