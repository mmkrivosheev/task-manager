import { useEffect, useRef } from "react";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { getFocusableElements } from "shared/UI/Modal/utils";
import { Portal } from "shared/UI/Portal";
import { Button } from "shared/UI/Button";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { closeModal } from "entities/app/appSlice";
import { TaskCard } from "shared/UI/TaskCard";
import CloseIcon from "assets/icons/close.svg";
import { ITaskCardProps } from "shared/UI/TaskCard/types";
import styles from "./Modal.module.scss";

export function Modal() {
	const modal = useAppSelector(state => state.app.modal);
	const dispatch = useAppDispatch();
	const modalContentRef = useRef<HTMLDivElement>(null);
	const downTargetRef = useRef<EventTarget | null>(null);

	useEffect(() => {
		const prevActive = modal && (document.activeElement as HTMLElement);
		const focusableEls = modalContentRef.current && getFocusableElements(modalContentRef.current);
		const handleKeyDown = (e: KeyboardEvent) => {
			if (modal && e.key === "Escape") {
				dispatch(closeModal());
			}
			if (modal && e.key === "Tab") {
				if (!focusableEls?.length) {
					e.preventDefault();
					return;
				}
				if (e.shiftKey) {
					if (document.activeElement === focusableEls[0]) {
						e.preventDefault();
						focusableEls.at(-1)?.focus();
					}
				} else {
					if (document.activeElement === focusableEls.at(-1)) {
						e.preventDefault();
						focusableEls[0]?.focus();
					}
				}
			}
		};

		if (modal) modalContentRef.current?.focus();
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			if (prevActive) prevActive.focus();
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [modal, dispatch]);

	if (!modal) return;

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget && e.target === downTargetRef.current) {
			dispatch(closeModal());
		}
		downTargetRef.current = null;
	};

	const getModalContent = (type: string, data?: object) => {
		switch (type) {
			case "editCard":
				return (
					<TaskCard
						task={(data as Partial<ITaskCardProps>).task}
						onSubmit={() => dispatch(closeModal())}
					/>
				);
			case "createCard":
				return <TaskCard onSubmit={() => dispatch(closeModal())} />;
		}
	};

	return (
		<Portal id="modal-root">
			<div
				className={styles.overlay}
				onMouseDown={e => (downTargetRef.current = e.target)}
				onClick={handleOverlayClick}
			>
				<div ref={modalContentRef} tabIndex={-1} className={styles.content}>
					<div className={styles.header}>
						<h2 className={styles.title}>{modal.title}</h2>
						<Button
							variant="link"
							icon={createSizedIcon(CloseIcon, 22, 22)}
							onClick={() => dispatch(closeModal())}
						/>
					</div>
					<div>{getModalContent(modal.type, modal.data)}</div>
				</div>
			</div>
		</Portal>
	);
}
