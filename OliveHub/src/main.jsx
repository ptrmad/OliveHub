import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import "./styles/theme.css";
// import { Layout } from "./components/Layout/Layout.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Home } from "./views/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "test",
    element: <NavBar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
