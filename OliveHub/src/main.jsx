import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import "./styles/theme.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Home } from "./views/Home/Home.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { ItemPage } from "./views/ItemPage/ItemPage.jsx";
import { Ranking } from "./views/Ranking/Ranking.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/:itemId", element: <ItemPage /> },
      { path: "/best", element: <Ranking /> },
    ],
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
