import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Map from "./pages/Map";
import Error from "./pages/Error";
import Register from "./components/Register";
// import RGPD from "./pages/RGPD";
import Login from "./components/Login";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Layout from "./components/Layouts/Layout";
import UserLayout from "./components/Layouts/UserLayout";
// import AdminLayout from "./components/Layouts/AdminLayout";
import { AuthContextProvider } from "./context/AuthContext";

import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carte",
        element: <Map />,
      },

      {
        path: "/inscription",
        element: <Register />,
      },

      {
        path: "/connexion",
        element: <Login />,
      },
      // {
      //   path: "/RGPD",
      //   element: <RGPD />,
      // },
      {
        path: "/galerie",
        element: <Gallery />,
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          {
            path: "/user/profil",
            element: <Profile />,
          },
          {
            path: "/user/admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
