import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@/App";
import "./index.css";

const app = createRoot(document.getElementById("app") as HTMLElement);

app.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
