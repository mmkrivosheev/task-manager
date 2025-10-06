import { useTranslation } from "react-i18next";

export function useFormatDate() {
	const { t, i18n } = useTranslation();

	return (isoString: string): string => {
		const date = new Date(isoString);
		const now = new Date();

		const isToday = date.toDateString() === now.toDateString();
		const yesterday = new Date();
		yesterday.setDate(now.getDate() - 1);
		const isYesterday = date.toDateString() === yesterday.toDateString();

		const locale = i18n.language === "ru" ? "ru-RU" : "en-US";
		const time = date.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });

		if (isToday) return `${t("Date.todayAt")} ${time}`;
		if (isYesterday) return `${t("Date.yesterdayAt")} ${time}`;

		return date.toLocaleDateString(locale, {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};
}
