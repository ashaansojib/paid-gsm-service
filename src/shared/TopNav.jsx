import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="space-x-4 text-gray-300">
      <Link className="text-sm hover:text-white" to="about-us">
        About Us
      </Link>
      <Link className="text-sm hover:text-white" to="#">
        Services
      </Link>
      <Link className="text-sm hover:text-white" to="#">
        Imei Check
      </Link>
      <button className="rounded-md px-3 py-1 hover:text-white bg-[#36393C] hover:bg-[#21C263]"><Link to="/admin">Singup</Link></button>
    </div>
  );
};

export default TopNav;
