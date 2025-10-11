import { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import { useAppDispatch } from "app/store/hooks";
import { fetchCurrentUser } from "entities/auth/authThunk";

export default function App() {
	const [isAuthChecking, setIsAuthChecking] = useState(true);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCurrentUser()).then(() => setIsAuthChecking(false));
	}, [dispatch]);

	return isAuthChecking || <Router />;
}
