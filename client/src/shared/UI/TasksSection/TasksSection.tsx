import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { fetchTasks } from "entities/tasks/tasksThunk";
import { Loader } from "shared/UI/Loader";
import { TasksList } from "shared/UI/TasksList";
import { Modal } from "shared/UI/Modal";
import { TaskCard } from "shared/UI/TaskCard";
import styles from "./TasksSection.module.scss";

export function TasksSection() {
	const [isFetching, setIsFetching] = useState(true);
	const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
	const { searchQuery, items } = useAppSelector(state => state.tasks);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const selectedTask = useMemo(() => {
		return items.find(item => item.id === selectedTaskId);
	}, [items, selectedTaskId]);

	const filteredTasks = useMemo(() => {
		if (!searchQuery) return items;
		const query = searchQuery.toLowerCase();
		return items.filter(item => item.title.toLowerCase().includes(query));
	}, [items, searchQuery]);

	useEffect(() => {
		dispatch(fetchTasks()).then(() => setIsFetching(false));
	}, [dispatch]);

	const handleTaskItemClick = useCallback((id: string) => {
		setSelectedTaskId(id);
	}, []);

	const handleTaskModalClose = useCallback(() => {
		setSelectedTaskId(null);
	}, []);

	if (isFetching) return <Loader className={styles.loader} delay={500} />;

	return (
		<section className={styles.tasks} tabIndex={0}>
			<TasksList items={filteredTasks} onItemClick={handleTaskItemClick} />
			<Modal isOpen={!!selectedTask} onClose={handleTaskModalClose} title={t("TasksPage.card")}>
				{<TaskCard task={selectedTask} onSubmit={handleTaskModalClose} />}
			</Modal>
		</section>
	);
}
