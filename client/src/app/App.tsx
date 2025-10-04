import { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import { useAppDispatch } from "app/store/hooks";
import { fetchCurrentUser } from "entities/auth/authThunk";

export default function App() {
	const [authCheck, setAuthCheck] = useState(true);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCurrentUser()).then(() => setAuthCheck(false));
	}, [dispatch]);

	return authCheck || <Router />;
}
