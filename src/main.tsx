import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/App";
import "./styles.css";
import { ContextProvider } from "./context/context.provider";

ReactDOM.createRoot(document.querySelector(".root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
