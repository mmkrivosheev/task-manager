import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { useEffect, useState } from "react";
import { fetchTasks } from "entities/tasks/tasksThunk";
import { Loader } from "shared/UI/Loader";
import styles from "./TasksSection.module.scss";
import { TasksList } from "shared/UI/TasksList";

export function TasksSection() {
	const [tasksCheck, setTasksCheck] = useState(true);
	const { isLoading, error, items } = useAppSelector(state => state.tasks);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTasks()).then(() => setTasksCheck(false));
	}, [dispatch]);

	if (isLoading) {
		return (
			<div className={styles.loader}>
				<Loader delay={500} />
			</div>
		);
	}
	if (error) return <div className={styles.error}>{error}</div>;

	return (
		tasksCheck || (
			<section className={styles.tasks} tabIndex={0}>
				<TasksList items={items} />
			</section>
		)
	);
}
