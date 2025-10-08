import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { TaskItem } from "shared/UI/TaskItem";
import { Modal } from "shared/UI/Modal";
import { TaskCard } from "shared/UI/TaskCard";
import { ITasksListProps } from "shared/UI/TasksList/types";
import { ITask } from "entities/tasks/types";
import styles from "./TasksList.module.scss";

export const TasksList = memo(function TasksList({ items }: ITasksListProps) {
	const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
	const { t } = useTranslation();

	if (!items.length) return <div className={styles.empty}>{t("TasksPage.emptyList")}</div>;

	return (
		<>
			<ul className={styles.tasksList}>
				{items.map(item => (
					<li key={item.id}>
						<TaskItem {...item} onClick={id => setSelectedTaskId(id)} />
					</li>
				))}
			</ul>
			<Modal
				isOpen={!!selectedTaskId}
				onClose={() => setSelectedTaskId(null)}
				title={t("TasksPage.card")}
			>
				<TaskCard
					onClick={() => setSelectedTaskId(null)}
					{...(items.find(item => item.id === selectedTaskId) as ITask)}
				/>
			</Modal>
		</>
	);
});
