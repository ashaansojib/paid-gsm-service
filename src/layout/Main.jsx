import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import FootHead from "../shared/FootHead";
import Featured from "../pages/home/homeFeatured/Featured";
import AOS from "aos";
import "aos/dist/aos.css";
import MenuBar from "../shared/MenuBar";
import HeroSection from "../shared/HeroSection";

const Main = () => {
    
  const location = useLocation();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      {/* menu bar in header */}
      <div className="bg-[#3a3e42] md:sticky top-0 z-10">
        <MenuBar />
      </div>
      {/* ads or updating news area */}
      {location.pathname === "/" ? <HeroSection /> : ""}
      <Outlet />
      <Featured />
      <FootHead />
      <Footer />
    </div>
  );
};

export default Main;
