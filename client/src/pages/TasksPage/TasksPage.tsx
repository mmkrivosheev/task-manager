import { Sidebar } from "shared/UI/Sidebar";
import { TasksSection } from "shared/UI/TasksSection";
import styles from "./TasksPage.module.scss";

export function TasksPage() {
	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<TasksSection />
		</div>
	);
}
