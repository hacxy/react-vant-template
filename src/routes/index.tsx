import App from "../App.tsx";
import { createBrowserRouter, redirect } from "react-router-dom";
import { routeConfig } from "./config.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => redirect("/home"),
      },
      ...routeConfig,
    ],
  },
]);
