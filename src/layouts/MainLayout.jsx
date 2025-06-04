import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ShopSideBar from "../components/layout/ShopSideBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-[#faeee7]">
      <Header />
      <main className="flex-1 w-full relative">
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fixed -top-4 w-full h-1/3 md:h-1/3 lg:h-auto">
            <path fill="#db2977" fillOpacity="0.1" d="M0,64L40,74.7C80,85,160,107,240,112C320,117,400,107,480,106.7C560,107,640,117,720,154.7C800,192,880,256,960,282.7C1040,309,1120,299,1200,282.7C1280,267,1360,245,1400,234.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
          </svg>
        </div>
        <div className="flex w-full mt-26 relative z-10">
          <ShopSideBar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
