import { useState } from "react";
import { Button } from "shared/UI/Button";
import { TasksList } from "shared/UI/TasksList";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import ChevronDouble from "assets/icons/chevronDouble.svg";
import styles from "./TasksPage.module.scss";
import clsx from "clsx";

export function TasksPage() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	console.log(isCollapsed);

	return (
		<div className={styles.wrapper}>
			<aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
				<div className={styles.chevronIcon}>
					<Button
						icon={createSizedIcon(ChevronDouble, 20, 20)}
						variant="link"
						onClick={() => setIsCollapsed(!isCollapsed)}
					/>
				</div>
				<div className={styles.asideContent}>{"{{ компонент в разработке }}"}</div>
			</aside>
			<section className={styles.tasks} tabIndex={-1}>
				<TasksList />
			</section>
		</div>
	);
}
