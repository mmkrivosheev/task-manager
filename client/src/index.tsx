import { createRoot } from "react-dom/client";
import App from "./app/App";
import "@fontsource/roboto";
import "shared/styles/index.scss";
import "./i18n";

const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);

root.render(<App />);
