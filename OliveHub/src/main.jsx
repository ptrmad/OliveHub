import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import "./styles/theme.css";
import { Home } from "./views/Home/Home.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { ItemPage } from "./views/ItemPage/ItemPage.jsx";
import { Ranking } from "./views/Ranking/Ranking.jsx";
import { Favourites } from "./views/Favourites/Favourites.jsx";
import { Explore } from "./views/Explore/Explore.jsx";
import { SearchContextProvider } from "./contexts/SearchContext.jsx";

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
      { path: "/favourites", element: <Favourites /> },
      { path: "/explore", element: <Explore /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  </React.StrictMode>
);
