import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { getFocusableElements } from "shared/UI/Modal/utils";
import { Button } from "shared/UI/Button";
import CloseIcon from "assets/icons/close.svg";
import { IModalProps } from "shared/UI/Modal/types";
import styles from "./Modal.module.scss";

export function Modal({ isOpen, onClose, children, title }: IModalProps) {
	const modalContentRef = useRef<HTMLDivElement>(null);
	const downTargetRef = useRef<EventTarget | null>(null);

	useEffect(() => {
		const prevActive = isOpen && (document.activeElement as HTMLElement);
		const focusableEls = modalContentRef.current && getFocusableElements(modalContentRef.current);
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isOpen && e.key === "Escape") onClose();
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
	}, [isOpen, onClose]);

	if (!isOpen) return;

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget && e.target === downTargetRef.current) onClose();
		downTargetRef.current = null;
	};

	const modalContent = (
		<div
			className={styles.overlay}
			onMouseDown={e => (downTargetRef.current = e.target)}
			onClick={handleOverlayClick}
		>
			<div ref={modalContentRef} tabIndex={-1} className={styles.content}>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					<Button variant="link" icon={createSizedIcon(CloseIcon, 22, 22)} onClick={onClose} />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);

	return createPortal(modalContent, document.getElementById("modal-root") as HTMLDivElement);
}
