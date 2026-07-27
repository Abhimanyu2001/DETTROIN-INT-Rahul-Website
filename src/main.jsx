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
import EnquiryPage from "./components/EnquiryPage";
import Aboutus from "./components/Aboutus";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import Admission from "./components/Admission";
import Academics from "./components/Academics";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/enquiry" element={<EnquiryPage />} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/admission" element={<Admission/>} />
      <Route path="/academics" element={<Academics/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);