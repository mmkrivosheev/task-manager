import { useState, useRef, useEffect } from "react";
import ArrowUpIcon from "@assets/icons/arrowUp.svg";
import ArrowDownIcon from "@assets/icons/arrowDown.svg";
import { ISelectProps } from "@components/UI/Select/types";
import styles from "./Select.module.scss";
import clsx from "clsx";

export function Select({ options, onChange, value: initValue, placeholder }: ISelectProps) {
	const [value, setValue] = useState<string | undefined>(initValue);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleToggle = () => {
		setIsOpen(prev => !prev);
		if (!isOpen) {
			setSelectedIndex(options.findIndex(option => option.value === value));
		}
	};

	const handleSelect = (value: string) => {
		onChange(value);
		setValue(value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		switch (e.key) {
			case "ArrowDown":
				setIsOpen(true);
				setSelectedIndex(prev => (prev + 1) % options.length);
				break;
			case "ArrowUp":
				setSelectedIndex(prev => (prev - 1 + options.length) % options.length);
				break;
			case "Enter":
				if (isOpen) {
					handleSelect(options[selectedIndex].value);
					setIsOpen(false);
				} else {
					handleToggle();
				}
				break;
			case "Escape":
				setIsOpen(false);
				break;
		}
	};

	return (
		<div
			className={styles.select}
			ref={ref}
			tabIndex={0}
			onClick={handleToggle}
			onKeyDown={handleKeyDown}
		>
			{options.find(option => option.value === value)?.label ?? placeholder}
			{isOpen ? <ArrowUpIcon className={styles.icon} /> : <ArrowDownIcon className={styles.icon} />}
			{isOpen && (
				<ul className={styles.options}>
					{options.map((option, index) => (
						<li
							key={option.value}
							className={clsx(index === selectedIndex && styles.selected)}
							onClick={() => handleSelect(option.value)}
							onMouseEnter={() => setSelectedIndex(index)}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
