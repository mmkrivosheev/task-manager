import { useId, useState } from "react";
import clsx from "clsx";
import { InputProps } from "@components/UI/Input/types";
import styles from "./Input.module.scss";

export function Input({ label, error, required = false, ...props }: InputProps) {
	const [value, setValue] = useState("");
	const id = useId();

	return (
		<div className={styles.wrapper}>
			{label && (
				<label className={clsx(styles.label, required && styles.required)} htmlFor={id}>
					{label}
				</label>
			)}
			<input
				id={id}
				className={styles.input}
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				{...props}
			/>
			{error && <p className={styles.errorMessage}>{error}</p>}
		</div>
	);
}
