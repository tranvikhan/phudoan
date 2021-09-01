import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div className="lg:pt-24 pt-16">
        {children}
        <Footer />
      </div>
    </>
  );
}
