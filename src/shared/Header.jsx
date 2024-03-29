import React from "react";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#457eca] to-[#49668b]">
      <div className="my-container flex justify-between items-center py-4 px-2">
        <Link to="/">
          <h2 className="text-white text-2xl italic">O-GsmService</h2>
        </Link>
        <TopNav />
      </div>
    </div>
  );
};

export default Header;
