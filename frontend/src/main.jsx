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
import Layout from "./pages/Layout";
import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/carte",
        element: <Map />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/galerie",
        element: <Gallery />,
      },
    ],
  },
  {
    path: "/inscription",
    element: <Register />,
  },
  {
    path: "/connexion",
    element: <Login />,
  },
]);
// {
//   path: "/RGPD",
//   element: <RGPD />,
// },

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
