import { useState } from "react";
import clsx from "clsx";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { Button } from "shared/UI/Button";
import ClearIcon from "assets/icons/close.svg";
import { ISearchBarProps } from "shared/UI/SearchBar/types";
import styles from "./SearchBar.module.scss";

export function SearchBar({ onSearch, placeholder, className, ...props }: ISearchBarProps) {
	const [query, setQuery] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		onSearch(value);
	};

	const handleClear = () => {
		setQuery("");
		onSearch("");
	};

	return (
		<div className={styles.wrapper}>
			<input
				className={clsx(styles.input, className)}
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
					onClick={handleClear}
				/>
			)}
		</div>
	);
}
