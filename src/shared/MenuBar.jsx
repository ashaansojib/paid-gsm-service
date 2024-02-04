import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="bg-[#0eb131] mb-2">
      <div className="my-container">
        <div>
          <ul className="flex items-center">
            <Link className="nav-items" to="/">Home</Link>
            <Link className="nav-items" to="/">Price & Packages</Link>
            <Link className="nav-items" to="/">Update Tools</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
