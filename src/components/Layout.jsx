import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";


function Layout() {

return (
  <div className="d-flex flex-column min-vh-100"  >

  <Nav/>

  {/* Main Content */}
  <main className="flex-grow-1">
  <Outlet />
  </main>

  <Footer/>

  </div>
);

};

export default Layout;