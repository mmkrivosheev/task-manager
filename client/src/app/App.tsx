import { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import { useAppDispatch } from "shared/hooks/redux";
import { fetchCurrentUser } from "entities/User/authThunk";
import { SplashScreen } from "shared/UI/SplashScreen";

export default function App() {
	const [authLoading, setAuthLoading] = useState(true);
	const dispatch = useAppDispatch();

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>;
		dispatch(fetchCurrentUser()).then(() => {
			timer = setTimeout(() => setAuthLoading(false), 1200);
		});
		return () => clearTimeout(timer);
	}, []);

	return authLoading ? <SplashScreen /> : <Router />;
}
