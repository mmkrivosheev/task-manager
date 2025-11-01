import { AppDispatch, RootState } from "app/store/store";
import { toggleSidebar } from "entities/app/appSlice";

export function toggleAndPersistSidebar() {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(toggleSidebar());
		localStorage.setItem("isSidebarOpen", getState().app.isSidebarOpen.toString());
	};
}
