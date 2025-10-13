import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormatDate } from "shared/hooks/useFormatDate";
import { addTask, deleteTaskById, updateTaskById } from "entities/tasks/tasksThunk";
import { getDiff, getFormData } from "shared/utils/common";
import { useAppDispatch } from "app/store/hooks";
import { statuses } from "shared/UI/TaskCard/statuses";
import { Select } from "shared/UI/Select";
import { Textarea } from "shared/UI/Textarea";
import { Button } from "shared/UI/Button";
import { ITask } from "entities/tasks/types";
import { ITaskCardErrors, ITaskCardProps } from "shared/UI/TaskCard/types";
import styles from "./TaskCard.module.scss";

export function TaskCard({ task, onSubmit }: ITaskCardProps) {
	const [errors, setErrors] = useState<ITaskCardErrors>({});
	const formatDate = useFormatDate();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const action = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
		const credentials = getFormData(e.currentTarget) as Partial<ITask>;

		if (!credentials.title?.length && ["add", "save"].includes(action.name)) {
			setErrors({ title: t("TasksPage.titleRequired") });
			return;
		}

		switch (action.name) {
			case "cancel":
				onSubmit();
				break;
			case "delete":
				dispatch(deleteTaskById((task as ITask).id)).then(success => success && onSubmit());
				break;
			case "add":
				dispatch(addTask(credentials)).then(success => success && onSubmit());
				break;
			case "save": {
				const diff = getDiff(credentials, task as ITask);
				if (Object.keys(diff).length > 0) {
					dispatch(updateTaskById((task as ITask).id, diff)).then(success => success && onSubmit());
				} else {
					onSubmit();
				}
			}
		}
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<div className={styles.header}>
				{task && (
					<p className={styles.createdAt}>
						{t("TasksPage.created")} {formatDate(task?.createdAt)}
					</p>
				)}
				{task?.updatedAt && (
					<p className={styles.updatedAt}>
						{t("TasksPage.updated")} {formatDate(task.updatedAt)}
					</p>
				)}
				<div className={styles.status}>
					<p className={styles.statusLabel}>{t("TasksPage.status")} </p>
					<Select
						className={styles.statusSelect}
						value={task?.status || "todo"}
						options={statuses.map(item => ({ ...item, label: t(item.label) }))}
						name="status"
					/>
				</div>
			</div>

			<Textarea name="title" value={task?.title} label={t("TasksPage.title")} error={errors.title} />
			<Textarea name="description" value={task?.description} label={t("TasksPage.description")} />

			<div className={styles.btnGroup}>
				<Button type="submit" name={task ? "save" : "add"}>
					{t("TasksPage.save")}
				</Button>
				<Button type="submit" name="cancel">
					{t("TasksPage.cancel")}
				</Button>
				{task && (
					<Button type="submit" name="delete">
						{t("TasksPage.delete")}
					</Button>
				)}
			</div>
		</form>
	);
}
