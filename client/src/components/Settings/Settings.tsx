import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@components/UI/Select";
import { Divider } from "@components/UI/Divider";
import { Button } from "@components/UI/Button";
import { SizedSVGIcon } from "@HOC/SizedSVGIcon";
import ThemeIcon from "@assets/icons/theme.svg";
import styles from "./Settings.module.scss";

const languages = [
	{ value: "en", label: "English" },
	{ value: "ru", label: "Русский" },
];

export function Settings() {
	const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
	const { i18n } = useTranslation();

	useEffect(() => {
		const html = document.documentElement;
		html.classList.add("theme-change");
		html.classList.toggle("theme-dark", theme === "dark");
		const timer = setTimeout(() => html.classList.remove("theme-change"), 100);
		localStorage.setItem("theme", theme);

		return () => clearTimeout(timer);
	}, [theme]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.select}>
				<Select
					value={i18n.language.split("-")[0]}
					options={languages}
					onChange={value => i18n.changeLanguage(value)}
				/>
			</div>
			<Divider type="vertical" size="small" />
			<Button
				icon={SizedSVGIcon(ThemeIcon, 22, 22)}
				variant="link"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			/>
		</div>
	);
}
