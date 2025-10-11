import { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import { Modal } from "shared/UI/Modal";
import { useAppDispatch } from "app/store/hooks";
import { fetchCurrentUser } from "entities/auth/authThunk";
import { Toast } from "shared/UI/Toast";

export default function App() {
	const [isAuthChecking, setIsAuthChecking] = useState(true);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCurrentUser()).then(() => setIsAuthChecking(false));
	}, [dispatch]);

	if (isAuthChecking) return;

	return (
		<>
			<Router />
			<Modal />
			<Toast />
		</>
	);
}
