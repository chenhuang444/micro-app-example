/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

let root: Root | undefined;

(window as any).mount = () => {
  root = createRoot(document.getElementById("root")!);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

(window as any).unmount = () => {
  if (root) {
    root.unmount();
    root = undefined;
  }
}

if (!(window as any)?.__MICRO_APP_ENVIRONMENT__) {
  (window as any)?.mount?.();
}