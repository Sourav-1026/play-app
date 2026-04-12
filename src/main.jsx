import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./route/Routes";
import InstalledAppsProvider from "./context/InstalledAppsProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppsProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </InstalledAppsProvider>
  </StrictMode>,
);
