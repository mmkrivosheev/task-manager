import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { clearToast } from "entities/app/appSlice";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { Button } from "shared/UI/Button";
import CloseIcon from "assets/icons/close.svg";
import { IToastProps } from "shared/UI/Toast/types";
import styles from "./Toast.module.scss";

export function Toast({ closable = false }: IToastProps) {
	const [isVisible, setIsVisible] = useState(false);
	const toast = useAppSelector(state => state.app.toast);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (toast) {
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
		<div className={clsx(styles.wrapper, styles[toast.type])}>
			<p className={styles.message}>{toast.message}</p>
			{closable && (
				<Button variant="link" icon={createSizedIcon(CloseIcon, 22, 22)} onClick={handleClose} />
			)}
		</div>
	);
}
