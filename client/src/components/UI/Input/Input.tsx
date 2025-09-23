import { useId, useState } from "react";
import clsx from "clsx";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	required?: boolean;
}

export const Input = ({ label, error, required = false, ...props }: InputProps) => {
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
				className={clsx(styles.input, error && styles.error)}
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				{...props}
			/>
			{error && <p className={styles.errorMessage}>{error}</p>}
		</div>
	);
};
