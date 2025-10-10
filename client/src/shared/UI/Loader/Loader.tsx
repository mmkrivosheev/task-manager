import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ILoaderProps } from "./types";
import styles from "./Loader.module.scss";

export function Loader({ delay = 0 }: ILoaderProps) {
	const [visible, setVisible] = useState(!delay);
	const { t } = useTranslation()

	useEffect(() => {
		if (!delay) return;
		const timer = setTimeout(() => setVisible(true), delay);
		return () => clearTimeout(timer);
	}, [delay]);

	if (!visible) return;

	return <p className={styles.content}>{t("Common.serverRequest")}</p>;
}
