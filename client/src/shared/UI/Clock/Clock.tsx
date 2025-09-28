import { useEffect, useState } from "react";

export function Clock() {
	const [time, setTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const hours = String(now.getHours()).padStart(2, "0");
			const minutes = String(now.getMinutes()).padStart(2, "0");
			const seconds = String(now.getSeconds()).padStart(2, "0");
			setTime(`${hours}:${minutes}:${seconds}`);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	return <time>{time}</time>;
}
