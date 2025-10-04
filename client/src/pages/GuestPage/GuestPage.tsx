import { useLayoutEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./GuestPage.module.scss";
import { Button } from "shared/UI/Button";
import { loginUser } from "entities/auth/authThunk";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { clearError } from "entities/auth/authSlice";

export const demo = { email: "demo@example.com", password: "123456" };

export function GuestPage() {
	const { error } = useAppSelector(state => state.auth);
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
		<div className={styles.guestWrapper}>
			<p>{t("GuestPage.info")}</p>
			<p>
				<Trans i18nKey="GuestPage.demoInfo" components={[<i key="italic" />]} />
			</p>
			<Button onClick={handleClick}>{t("GuestPage.demoButton")}</Button>
			{error && <p className={styles.errorMessage}>{t(error)}</p>}
		</div>
	);
}
