import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/UI/Select";
import { Button } from "shared/UI/Button";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import { useLocalStorage } from "shared/hooks/useLocalStorage";
import SunIcon from "assets/icons/sun.svg";
import MoonIcon from "assets/icons/moon.svg";
import styles from "./Settings.module.scss";
import { languages } from "shared/UI/Settings/languages";

export function Settings() {
	const [theme, setTheme] = useLocalStorage("theme", "light");
	const { i18n } = useTranslation();

	useEffect(() => {
		const html = document.documentElement;
		html.classList.add("theme-change");
		html.classList.toggle("theme-dark", theme === "dark");
		const timer = setTimeout(() => html.classList.remove("theme-change"), 100);
		return () => clearTimeout(timer);
	}, [theme]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.languageSelect}>
				<Select
					value={i18n.language}
					options={languages}
					onChange={value => i18n.changeLanguage(value)}
				/>
			</div>
			<div className={styles.themeButton}>
				<Button
					icon={createSizedIcon(theme === "light" ? MoonIcon : SunIcon, 24, 24)}
					variant="link"
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				/>
			</div>
		</div>
	);
}
