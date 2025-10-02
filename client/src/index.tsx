import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import "shared/styles/index.scss";
import "shared/config/i18n";
import { store } from "app/store";

const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
