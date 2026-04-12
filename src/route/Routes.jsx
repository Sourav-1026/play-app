import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import InstalledPage from "../pages/InstalledPage";
import AppsPage from "../pages/AppsPage";
import Dashboard from "../pages/Dashboard";
import AppsDetailsPage from "../pages/AppsDetailsPage";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: RootLayout,
    loader: async () => {
      const res = await fetch("/data.json");
      return res.json();
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/apps",
        element: <AppsPage />,
      },
      {
        path: "/installapps",
        element: <InstalledPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/apps/:id",
        element: <AppsDetailsPage />,
      },
    ],
  },
]);
