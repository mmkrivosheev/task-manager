import clsx from "clsx";
import { IDividerProps } from "@components/UI/Divider/types";
import styles from "./Divider.module.scss";

export function Divider({ type = "horizontal", size = "middle" }: IDividerProps) {
	return <div className={clsx(styles.divider, styles[type], styles[size])} />;
}
