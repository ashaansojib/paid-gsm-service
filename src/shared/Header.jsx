import React from "react";
import { Link, useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import MenuBar from "./MenuBar";
import HeroSection from "./HeroSection";
const Header = () => {
  const location = useLocation();
  return (
    <div>
      {/* top header content */}
      <div className="bg-gradient-to-r from-[#457eca] to-[#49668b]">
        <div className="my-container flex justify-between items-center py-4 px-2">
          <Link to="/"><h2 className="text-white text-2xl italic">O-GsmService</h2></Link>
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
