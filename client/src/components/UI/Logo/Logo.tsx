import { ReactNode, useEffect, useRef } from "react";
import styles from "./Logo.module.scss";

interface LogoProps {
	children: ReactNode;
}
export const Logo = ({ children }: LogoProps) => {
	const ref = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const setWidth = (el: HTMLAnchorElement): void => {
			el.style.setProperty("--text-type-width", Math.ceil(el.scrollWidth).toString());
			el.classList.add(styles.type);
		};

		if (document.readyState === "complete") {
			setWidth(el);
		} else {
			window.addEventListener("load", () => {
				setWidth(el);
			});
		}
	}, []);

	return (
		<a ref={ref} className={styles.logo}>
			{children}
		</a>
	);
};
