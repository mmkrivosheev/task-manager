import clsx from "clsx";
import { useFormatDate } from "shared/hooks/useFormatDate";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { Button } from "shared/UI/Button";
import OpenIcon from "assets/icons/open.svg";
import { ITask } from "entities/tasks/types";
import styles from "./TaskItem.module.scss";

export function TaskItem({ title, createdAt, status }: ITask) {
	const formatDate = useFormatDate();

	return (
		<article className={styles.wrapper} tabIndex={0}>
			<div className={styles.taskInfo}>
				<div className={styles.header}>
					<div className={clsx(styles.status, styles[status])}></div>
					<div className={styles.createdAt}>{formatDate(createdAt)}</div>
				</div>
				<div className={styles.title}>{title}</div>
			</div>
			<div className={styles.openBtn}>
				<Button icon={createSizedIcon(OpenIcon, 24, 24)} variant="link" color="light" tabIndex={-1} />
			</div>
		</article>
	);
}
