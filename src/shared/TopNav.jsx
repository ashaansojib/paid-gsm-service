import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div>
      <ul className="flex gap-3 items-center">
        <Link className="text-hover font-semibold text-sm" to="about-us">
          About Us
        </Link>
        <Link className="text-hover font-semibold text-sm" to="#">
          Services
        </Link>
        <Link className="text-hover font-semibold text-sm" to="#">
          Imei Check
        </Link>
      </ul>
    </div>
  );
};

export default TopNav;
