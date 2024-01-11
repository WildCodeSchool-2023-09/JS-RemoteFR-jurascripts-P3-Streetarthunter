import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./pages/Map";
import Error from "./pages/Error";
import Register from "./pages/Register";
import RGPD from "./pages/RGPD";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/RGPD",
    element: <RGPD />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
