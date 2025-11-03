import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { setFilterByStatus } from "entities/tasks/tasksSlice";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { useAppDispatch } from "app/store/hooks";
import { Select } from "shared/UI/Select";
import { Button } from "shared/UI/Button";
import { statuses } from "shared/UI/SearchBar/statuses";
import ClearIcon from "assets/icons/close.svg";
import { ISearchBarProps } from "shared/UI/SearchBar/types";
import { ITasksState } from "entities/tasks/types";
import styles from "./SearchBar.module.scss";

export function SearchBar({ onSearch, placeholder, className, ...props }: ISearchBarProps) {
	const [query, setQuery] = useState("");
	const input = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		onSearch(value);
	};

	const handleClear = () => {
		input.current?.focus();
		setQuery("");
		onSearch("");
	};

	return (
		<div className={clsx(styles.wrapper, className)}>
			<Select
				className={styles.select}
				value=""
				options={statuses.map(item => ({ ...item, label: t(item.label) }))}
				onChange={value => dispatch(setFilterByStatus(value as ITasksState["filterByStatus"]))}
			/>
			<input
				ref={input}
				className={styles.input}
				value={query}
				placeholder={placeholder}
				onChange={handleChange}
				{...props}
			/>
			{query && (
				<Button
					className={styles.button}
					variant="link"
					icon={createSizedIcon(ClearIcon, 20, 20)}
					onMouseDown={e => e.preventDefault()}
					onClick={handleClear}
				/>
			)}
		</div>
	);
}
