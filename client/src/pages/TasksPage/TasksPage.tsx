import { Sidebar } from "shared/UI/Sidebar";
import { TasksList } from "shared/UI/TasksList";
import styles from "./TasksPage.module.scss";

export function TasksPage() {
	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<section className={styles.tasks} tabIndex={-1}>
				<TasksList />
			</section>
		</div>
	);
}
