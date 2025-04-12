import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ShopSideBar from "../components/layout/ShopSideBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <Header />
      <main className="flex-1">
        <div className="flex w-full mt-26">
          <ShopSideBar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
