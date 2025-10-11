import { useId, useLayoutEffect, useRef, useState } from "react";
import { ITextareaProps } from "shared/UI/Textarea/types";
import styles from "./Textarea.module.scss";
import clsx from "clsx";

export function Textarea({ value: initValue = "", label, error, className, ...props }: ITextareaProps) {
	const [value, setValue] = useState(initValue);
	const ref = useRef<HTMLTextAreaElement>(null);
	const id = useId();

	useLayoutEffect(() => {
		const textarea = ref.current;
		if (textarea) {
			textarea.style.height = "auto";
			textarea.style.height = textarea.scrollHeight + "px";
		}
	}, [value]);

	return (
		<div className={clsx(styles.wrapper, className)}>
			{label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<textarea
				id={id}
				ref={ref}
				className={styles.textarea}
				value={value}
				onChange={e => setValue(e.target.value)}
				{...props}
			/>
			{error && <p className={styles.errorMessage}>{error}</p>}
		</div>
	);
}
