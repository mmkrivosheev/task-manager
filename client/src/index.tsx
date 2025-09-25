import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/roboto";
import "./styles/index.scss";
import "./i18n";

const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);

root.render(<App />);
