import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { ILoaderProps } from "./types";
import styles from "./Loader.module.scss";

export function Loader({ delay = 0, className }: ILoaderProps) {
	const [isVisible, setIsVisible] = useState(!delay);
	const { t } = useTranslation();

	useEffect(() => {
		if (!delay) return;
		const timer = setTimeout(() => setIsVisible(true), delay);
		return () => clearTimeout(timer);
	}, [delay]);

	if (!isVisible) return;

	return <p className={clsx(styles.content, className)}>{t("Common.serverRequest")}</p>;
}
