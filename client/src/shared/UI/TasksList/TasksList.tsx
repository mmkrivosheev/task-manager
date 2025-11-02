import { memo, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { TaskItem } from "shared/UI/TaskItem";
import { openModal } from "entities/app/appSlice";
import { useAppDispatch } from "app/store/hooks";
import { ITasksListProps } from "shared/UI/TasksList/types";
import styles from "./TasksList.module.scss";

export const TasksList = memo(function TasksList({ items }: ITasksListProps) {
	const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const openItemCard = (id: string) => {
		dispatch(
			openModal({
				type: "editCard",
				title: t("TasksPage.card"),
				data: {
					task: items.find(item => item.id === id),
				},
			})
		);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
		if (!items.length) return;

		if (e.key === "ArrowDown") {
			e.preventDefault();
			setFocusedIndex(prev => (prev === null ? 0 : Math.min(prev + 1, items.length - 1)));
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			setFocusedIndex(prev => (prev === null ? 0 : Math.max(prev - 1, 0)));
		}
		if (e.key === "Enter" && focusedIndex !== null) {
			e.preventDefault();
			openItemCard(items[focusedIndex].id);
		}
	};

	useLayoutEffect(() => {
		const activeEl = document.activeElement;
		if (
			focusedIndex === null ||
			(!activeEl?.closest("#modal-root") &&
				activeEl?.className !== styles.tasksList &&
				activeEl?.className !== styles.taskItem)
		) {
			return;
		}

		if (items[focusedIndex]) {
			const listItems = document.querySelectorAll<HTMLLIElement>(`.${styles.taskItem}`);
			listItems[focusedIndex].focus();
		} else if (focusedIndex > 0) {
			setFocusedIndex(focusedIndex - 1);
		}
	}, [focusedIndex, items]);

	if (!items.length) {
		return <p className={styles.empty}>{t("TasksPage.emptyList")}</p>;
	}

	return (
		<ul className={styles.tasksList} tabIndex={0} onKeyDown={handleKeyDown}>
			{items.map((item, index) => (
				<li
					key={item.id}
					tabIndex={-1}
					className={clsx(styles.taskItem, index === focusedIndex && styles.focused)}
					onClick={() => setFocusedIndex(index)}
					onDoubleClick={() => openItemCard(item.id)}
				>
					<TaskItem {...item} onClick={id => openItemCard(id)} />
				</li>
			))}
		</ul>
	);
});
