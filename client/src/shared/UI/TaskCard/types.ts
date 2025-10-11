import { ITask } from "entities/tasks/types";

export interface ITaskCardProps {
	task?: ITask;
	onSubmit: () => void;
}

export interface ITaskCardErrors {
	title?: string;
}
