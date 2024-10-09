import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
