import clsx from "clsx";
import { useFormatDate } from "shared/hooks/useFormatDate";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { Button } from "shared/UI/Button";
import OpenIcon from "assets/icons/open.svg";
import { ITaskProps } from "shared/UI/TaskItem/types";
import styles from "./TaskItem.module.scss";

export function TaskItem({ id, title, createdAt, status, onClick }: ITaskProps) {
	const formatDate = useFormatDate();

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Enter") {
			onClick(id);
		}
	};

	return (
		<article className={styles.wrapper} onDoubleClick={() => onClick(id)} onKeyDown={handleKeyDown}>
			<div className={styles.taskInfo}>
				<div className={styles.header}>
					<div className={clsx(styles.status, styles[status])}></div>
					<div className={styles.createdAt}>{formatDate(createdAt)}</div>
				</div>
				<div className={styles.title}>{title}</div>
			</div>
			<div className={styles.openBtn}>
				<Button
					icon={createSizedIcon(OpenIcon, 24, 24)}
					variant="link"
					color="light"
					tabIndex={-1}
					onClick={() => onClick(id)}
				/>
			</div>
		</article>
	);
}
