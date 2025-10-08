import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormatDate } from "shared/hooks/useFormatDate";
import { deleteTaskById, updateTaskById } from "entities/tasks/tasksThunk";
import { getDiff } from "shared/utils/common";
import { useAppDispatch } from "app/store/hooks";
import { statuses } from "shared/UI/TaskCard/statuses";
import { Select } from "shared/UI/Select";
import { Textarea } from "shared/UI/Textarea";
import { Button } from "shared/UI/Button";
import { ITask } from "entities/tasks/types";
import { ITaskCardErrors, ITaskCardProps } from "shared/UI/TaskCard/types";
import styles from "./TaskCard.module.scss";

export function TaskCard({ id, title, description, status, createdAt, updatedAt, onClick }: ITaskCardProps) {
	const [errors, setErrors] = useState<ITaskCardErrors>({});
	const titleRef = useRef<HTMLTextAreaElement>(null);
	const descRef = useRef<HTMLTextAreaElement>(null);
	const statusRef = useRef<string>(status);
	const formatDate = useFormatDate();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const saveTask = () => {
		const updates = {
			title: titleRef.current?.value ?? title,
			description: descRef.current?.value ?? description,
			status: statusRef.current ?? status,
		};
		if (!updates.title.length) {
			setErrors({ title: t("TasksPage.titleRequired") });
			return;
		}
		onClick();
		const diff = getDiff(updates, { title, description, status }) as ITask;
		if (Object.keys(diff).length > 0) {
			dispatch(updateTaskById(id, diff));
		}
	};

	const deleteTask = () => {
		dispatch(deleteTaskById(id));
		onClick();
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<p className={styles.createdAtLabel}>
					{t("TasksPage.created")} {formatDate(createdAt)}
				</p>
				{updatedAt && (
					<p className={styles.updatedAtLabel}>
						{t("TasksPage.updated")} {formatDate(updatedAt)}
					</p>
				)}
				<div className={styles.status}>
					<p className={styles.statusLabel}>{t("TasksPage.status")} </p>
					<div className={styles.statusSelect}>
						<Select
							value={status}
							options={statuses.map(item => ({ ...item, label: t(item.label) }))}
							onChange={value => (statusRef.current = value)}
						/>
					</div>
				</div>
			</div>

			<Textarea value={title} label={t("TasksPage.title")} ref={titleRef} error={errors.title} />
			<Textarea value={description} label={t("TasksPage.description")} ref={descRef} />

			<div className={styles.btnGroup}>
				<Button onClick={saveTask}>{t("TasksPage.save")}</Button>
				<Button onClick={() => onClick()}>{t("TasksPage.close")}</Button>
				<div className={styles.btnDelete}>
					<Button onClick={deleteTask}>{t("TasksPage.delete")}</Button>
				</div>
			</div>
		</div>
	);
}
