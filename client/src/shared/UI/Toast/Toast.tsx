import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { clearToast } from "entities/app/appSlice";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { Button } from "shared/UI/Button";
import CloseIcon from "assets/icons/close.svg";
import { IToastProps } from "shared/UI/Toast/types";
import styles from "./Toast.module.scss";
import { Portal } from "shared/UI/Portal";

export function Toast({ closable = false }: IToastProps) {
	const [isVisible, setIsVisible] = useState(false);
	const toast = useAppSelector(state => state.app.toast);
	const dispatch = useAppDispatch();
	const offsetLeft = useRef<string>(null);

	useEffect(() => {
		if (toast) {
			offsetLeft.current = document.body.getBoundingClientRect().left + 10 + "px";
			setIsVisible(true);
			const timer = setTimeout(() => handleClose(), toast?.duration ?? 5000);
			return () => clearTimeout(timer);
		}
	}, [toast]);

	const handleClose = () => {
		setIsVisible(false);
		dispatch(clearToast());
	};

	if (!isVisible || !toast) return;

	return (
		<Portal id="toast-root">
			<div
				className={clsx(styles.wrapper, styles[toast.type])}
				style={{ left: offsetLeft.current as string }}
			>
				<p className={styles.message}>{toast.message}</p>
				{closable && (
					<Button variant="link" icon={createSizedIcon(CloseIcon, 22, 22)} onClick={handleClose} />
				)}
			</div>
		</Portal>
	);
}
