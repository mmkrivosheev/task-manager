import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { fetchTasks } from "entities/tasks/tasksThunk";
import { TaskItem } from "shared/UI/TaskItem";
import { Modal } from "shared/UI/Modal";
import { Loader } from "shared/UI/Loader";
import styles from "./TasksList.module.scss";
import { TaskCard } from "shared/UI/TaskCard";
import { ITask } from "entities/tasks/types";

export function TasksList() {
	const { isLoading, error, items } = useAppSelector(state => state.tasks);
	const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	if (isLoading) {
		return (
			<div className={styles.loader}>
				<Loader delay={500} />
			</div>
		);
	}
	if (error) return <div className={styles.error}>{error}</div>;
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
			<Modal isOpen={!!selectedTaskId} onClose={() => setSelectedTaskId(null)} title="Карточка задачи">
				<TaskCard {...(items.find(item => item.id === selectedTaskId) as ITask)} />
			</Modal>
		</>
	);
}
