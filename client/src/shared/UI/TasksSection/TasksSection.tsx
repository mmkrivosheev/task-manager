import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { closeTaskModal, openTaskModal } from "entities/app/appSlice";
import { fetchTasks } from "entities/tasks/tasksThunk";
import { Loader } from "shared/UI/Loader";
import { TasksList } from "shared/UI/TasksList";
import { Modal } from "shared/UI/Modal";
import { TaskCard } from "shared/UI/TaskCard";
import { ITask } from "entities/tasks/types";
import styles from "./TasksSection.module.scss";

export function TasksSection() {
	const [isFetching, setIsFetching] = useState(true);
	const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
	const isTaskModalOpen = useAppSelector(state => state.app.isTaskModalOpen);
	const { isLoading, error, items } = useAppSelector(state => state.tasks);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const cardData = selectedTaskId ? items.find(item => item.id === selectedTaskId) : ({} as ITask);

	useEffect(() => {
		dispatch(fetchTasks()).finally(() => setIsFetching(false));
	}, [dispatch]);

	useEffect(() => {
		if (!isTaskModalOpen) setSelectedTaskId(null);
	}, [isTaskModalOpen]);

	if (isLoading) {
		return (
			<div className={styles.loader}>
				<Loader delay={500} />
			</div>
		);
	}
	if (error) return <div className={styles.error}>{error}</div>;
	if (isFetching) return;

	const handleTaskItemClick = (id: string) => {
		setSelectedTaskId(id);
		dispatch(openTaskModal());
	};

	const handleTaskModalClose = () => {
		setSelectedTaskId(null);
		dispatch(closeTaskModal());
	};

	return (
		<section className={styles.tasks} tabIndex={0}>
			<TasksList items={items} onItemClick={handleTaskItemClick} />
			<Modal isOpen={isTaskModalOpen} onClose={handleTaskModalClose} title={t("TasksPage.card")}>
				<TaskCard {...cardData} />
			</Modal>
		</section>
	);
}
