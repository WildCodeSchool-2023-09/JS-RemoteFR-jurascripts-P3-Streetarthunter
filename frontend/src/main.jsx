import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./components/Map";
import Error from "./pages/Error";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
