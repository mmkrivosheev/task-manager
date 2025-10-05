import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { fetchTasks } from "entities/tasks/tasksThunk";
import { TaskItem } from "shared/UI/TaskItem";
import { Loader } from "shared/UI/Loader";
import styles from "./TasksList.module.scss";

export function TasksList() {
	const { error, isLoading, items } = useAppSelector(state => state.tasks);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTasks());
	}, []);

	if (error) return <p className={styles.error}>{error}</p>;
	if (isLoading) return <Loader delay={500} />;
	if (!items.length) return <p className={styles.empty}>Список пуст</p>;

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
