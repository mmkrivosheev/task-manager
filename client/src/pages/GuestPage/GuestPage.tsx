import { Trans, useTranslation } from "react-i18next";
import styles from "./GuestPage.module.scss";
import { Button } from "shared/UI/Button";
import { loginUser } from "entities/User/authThunk";
import { useAppDispatch } from "shared/hooks/redux";
import { useNavigate } from "react-router-dom";
import { demoUser } from "pages/GuestPage/demoUser";

export function GuestPage() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const handleClick = async () => {
		const isLogged = await dispatch(loginUser(demoUser));
		if (isLogged) navigate("/tasks");
	};

	return (
		<>
			<div className={styles.guestWrapper}>
				<p>{t("GuestPage.info")}</p>
				<p><Trans i18nKey="GuestPage.demoInfo" components={[<i />]} /></p>
					<Button onClick={handleClick}>{t("GuestPage.demoButton")}</Button>
			</div>
		</>
	);
}
