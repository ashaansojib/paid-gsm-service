import React from "react";
import { useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import MenuBar from "./MenuBar";
import HeroSection from "./HeroSection";
const Header = () => {
  const location = useLocation();
  return (
    <div>
      {/* top header content */}
      <div className="bg-[#24272B]">
        <div className="my-container md:flex justify-between items-center py-4 px-2 hidden">
          <h2 className="text-white text-2xl italic">O-GsmService</h2>
          <TopNav />
        </div>
      </div>
      {/* menu bar in header */}
      <MenuBar />
      {/* ads or updating news area */}
      {location.pathname === "/" ? <HeroSection /> : ""}
    </div>
  );
};

export default Header;
