import { memo } from "react";
import { useTranslation } from "react-i18next";
import { TaskItem } from "shared/UI/TaskItem";
import { openModal } from "entities/app/appSlice";
import { useAppDispatch } from "app/store/hooks";
import { ITasksListProps } from "shared/UI/TasksList/types";
import styles from "./TasksList.module.scss";

export const TasksList = memo(function TasksList({ items }: ITasksListProps) {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	if (!items.length) {
		return <p className={styles.empty}>{t("TasksPage.emptyList")}</p>;
	}

	const handleItemClick = (id: string) => {
		dispatch(
			openModal({
				type: "editCard",
				title: t("TasksPage.card"),
				data: {
					task: items.find(item => item.id === id),
				},
			})
		);
	};

	return (
		<>
			<ul className={styles.tasksList}>
				{items.map(item => (
					<li key={item.id}>
						<TaskItem {...item} onClick={id => handleItemClick(id)} />
					</li>
				))}
			</ul>
		</>
	);
});
