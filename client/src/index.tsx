import { createRoot } from "react-dom/client";
import App from "./app/App";
import "shared/styles/index.scss";
import "shared/config/i18n";

const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);

root.render(<App />);
