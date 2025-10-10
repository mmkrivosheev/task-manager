import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { Button } from "shared/UI/Button";
import CloseIcon from "assets/icons/close.svg";
import styles from "./Toast.module.scss";
import { clearToast } from "entities/app/appSlice";

export function Toast() {
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
		<div className={clsx(styles.toast, styles[toast.type])}>
			<p>{toast.message}</p>
			<Button variant="link" icon={createSizedIcon(CloseIcon, 22, 22)} onClick={handleClose} />
		</div>
	);
}
