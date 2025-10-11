import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { fetchTasks } from "entities/tasks/tasksThunk";
import { Loader } from "shared/UI/Loader";
import { TasksList } from "shared/UI/TasksList";
import styles from "./TasksSection.module.scss";

export function TasksSection() {
	const [isFetching, setIsFetching] = useState(true);
	const { searchQuery, items } = useAppSelector(state => state.tasks);
	const dispatch = useAppDispatch();

	const filteredTasks = useMemo(() => {
		if (!searchQuery) return items;
		const query = searchQuery.toLowerCase();
		return items.filter(item => item.title.toLowerCase().includes(query));
	}, [items, searchQuery]);

	useEffect(() => {
		dispatch(fetchTasks()).then(() => setIsFetching(false));
	}, [dispatch]);

	if (isFetching) return <Loader className={styles.loader} delay={500} />;

	return (
		<section className={styles.tasks} tabIndex={0}>
			<TasksList items={filteredTasks} />
		</section>
	);
}
