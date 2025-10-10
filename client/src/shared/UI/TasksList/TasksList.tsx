import { memo } from "react";
import { useTranslation } from "react-i18next";
import { TaskItem } from "shared/UI/TaskItem";
import { ITasksListProps } from "shared/UI/TasksList/types";
import styles from "./TasksList.module.scss";

export const TasksList = memo(function TasksList({ items, onItemClick }: ITasksListProps) {
	const { t } = useTranslation();

	if (!items.length) {
		return <p className={styles.empty}>{t("TasksPage.emptyList")}</p>;
	}

	return (
		<>
			<ul className={styles.tasksList}>
				{items.map(item => (
					<li key={item.id}>
						<TaskItem {...item} onClick={id => onItemClick(id)} />
					</li>
				))}
			</ul>
		</>
	);
});
