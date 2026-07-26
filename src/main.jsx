import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
// import About from "./components/About";
// import Gallery from "./components/Gallery";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);