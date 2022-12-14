import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-black min-h-screen text-slate-200">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
