import styles from "./Main.module.scss";
import { IMainProps } from "shared/UI/Main/types";

export function Main({ children }: IMainProps) {
	return <main className={styles.main}>{children}</main>;
}
