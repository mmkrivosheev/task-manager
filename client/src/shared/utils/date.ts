export function formatTaskDate(isoString: string): string {
	const date = new Date(isoString);
	const now = new Date();

	const isToday = date.toDateString() === now.toDateString();

	const yesterday = new Date();
	yesterday.setDate(now.getDate() - 1);
	const isYesterday = date.toDateString() === yesterday.toDateString();

	const time = date.toLocaleTimeString("ru-RU", {
		hour: "2-digit",
		minute: "2-digit",
	});

	if (isToday) return `Сегодня в ${time}`;
	if (isYesterday) return `Вчера в ${time}`;

	return date.toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}
