import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./pages/Map";
import Error from "./pages/Error";
import Register from "./components/Register";
// import RGPD from "./pages/RGPD";
import Login from "./components/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
  },
  {
    path: "/carte",
    element: <Map />,
  },
  {
    path: "/inscription",
    element: <Register />,
  },
  // {
  //   path: "/RGPD",
  //   element: <RGPD />,
  // },
  {
    path: "/connexion",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
