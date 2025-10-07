import { useId, useLayoutEffect, useRef, useState } from "react";
import { ITextareaProps } from "shared/UI/Textarea/types";
import styles from "./Textarea.module.scss";

export function Textarea({ label, value: initValue = "", ...props }: ITextareaProps) {
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
		<div className={styles.wrapper}>
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
		</div>
	);
}
