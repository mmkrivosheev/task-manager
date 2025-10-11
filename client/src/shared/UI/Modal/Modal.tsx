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

const getModalContent = (type: string, props: ITaskCardProps) => {
	switch (type) {
		case "editCard":
		case "createCard":
			return <TaskCard {...props} />;
	}
};

export function Modal() {
	const { isOpen, title, type, props } = useAppSelector(state => state.app.modal);
	const dispatch = useAppDispatch();
	const modalContentRef = useRef<HTMLDivElement>(null);
	const downTargetRef = useRef<EventTarget | null>(null);

	useEffect(() => {
		const prevActive = isOpen && (document.activeElement as HTMLElement);
		const focusableEls = modalContentRef.current && getFocusableElements(modalContentRef.current);
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isOpen && e.key === "Escape") {
				dispatch(closeModal());
			}
			if (isOpen && e.key === "Tab") {
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

		if (isOpen) modalContentRef.current?.focus();
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			if (prevActive) prevActive.focus();
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	if (!isOpen) return;

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget && e.target === downTargetRef.current) {
			dispatch(closeModal());
		}
		downTargetRef.current = null;
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
						<h2 className={styles.title}>{title}</h2>
						<Button
							variant="link"
							icon={createSizedIcon(CloseIcon, 22, 22)}
							onClick={() => dispatch(closeModal())}
						/>
					</div>
					<div>{getModalContent(type as string, props as ITaskCardProps)}</div>
				</div>
			</div>
		</Portal>
	);
}
