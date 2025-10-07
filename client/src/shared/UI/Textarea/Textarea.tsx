import { useId, useLayoutEffect, useRef, useState } from "react";
import { ITextareaProps } from "shared/UI/Textarea/types";
import styles from "./Textarea.module.scss";

export function Textarea({
	value: initValue = "",
	label,
	error,
	ref: externalRef,
	...props
}: ITextareaProps) {
	const [value, setValue] = useState(initValue);
	const innerRef = useRef<HTMLTextAreaElement>(null);
	const id = useId();
	const ref = externalRef || innerRef;

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
			{error && <p className={styles.errorMessage}>{error}</p>}
		</div>
	);
}
