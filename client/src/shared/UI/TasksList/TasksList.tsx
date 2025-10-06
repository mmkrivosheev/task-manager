import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { fetchTasks } from "entities/tasks/tasksThunk";
import { TaskItem } from "shared/UI/TaskItem";
import { Loader } from "shared/UI/Loader";
import styles from "./TasksList.module.scss";

export function TasksList() {
	const { isLoading, error, items } = useAppSelector(state => state.tasks);
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
		<ul className={styles.tasksList}>
			{items.map(item => (
				<li key={item.id}>
					<TaskItem {...item} />
				</li>
			))}
		</ul>
	);
}
