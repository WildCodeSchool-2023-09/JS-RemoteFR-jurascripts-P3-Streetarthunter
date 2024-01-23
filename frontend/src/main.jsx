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
import Layout from "./pages/Layout";
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
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/inscription",
        element: <Register />,
      },

      {
        path: "/connexion",
        element: <Login />,
      },
      {
        path: "profil",
        element: <Profile />,
      },
      // {
      //   path: "/RGPD",
      //   element: <RGPD />,
      // },
      {
        path: "/galerie",
        element: <Gallery />,
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
