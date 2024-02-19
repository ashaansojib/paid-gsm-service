import React from "react";
import HeadingMarquee from "./HeadingMarquee";
import { Link, useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import MenuBar from "./MenuBar";
import { FaCartArrowDown, FaEnvelope, FaPhone } from "react-icons/fa6";
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
      {location.pathname === "/" ? <HeadingMarquee /> : ""}
    </div>
  );
};

export default Header;
