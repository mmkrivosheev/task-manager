import { useLayoutEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "shared/UI/Button";
import { loginUser } from "entities/auth/authThunk";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { clearError } from "entities/auth/authSlice";
import { Loader } from "shared/UI/Loader";
import styles from "./GuestPage.module.scss";

export const demo = { email: "demo@example.com", password: "123456" };

export function GuestPage() {
	const { isLoading } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	useLayoutEffect(() => {
		return () => {
			dispatch(clearError());
		};
	}, [dispatch]);

	const handleClick = async () => {
		await dispatch(loginUser(demo));
	};

	return (
		<main className={styles.guestWrapper}>
			<h2 className={styles.title}>{t("GuestPage.info")}</h2>
			<p>
				<Trans i18nKey="GuestPage.demoInfo" components={[<i key="italic" />]} />
			</p>
			<Button onClick={handleClick}>{t("GuestPage.demoButton")}</Button>
			{isLoading && <Loader />}
		</main>
	);
}
